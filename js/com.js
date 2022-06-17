class forComponent {
    static scrName = '<script>';
    static scrEndName = '</script>';

    static startCovertComponent(){
        const components = document.querySelectorAll('component');
        components.forEach((component, index) => {
            const src = component.getAttribute('src');

            const props = component.getAttribute('props');
            if(props) {
                const propsArray = props.replace(/[{,\n}]/g, '').split(';');
                this.getComponent(src, (res) => {
                    this.addScript(res, (HTML) => {
                        let ConvertedHtml = HTML;
                        propsArray.map((_props) => {
                            const objProps = _props.split(':');
                            const key = objProps[0].replace(/ /g, '');
                            const val = objProps[1];
                            const reg = new RegExp(`{{${key}}}`, 'g');
                            ConvertedHtml = ConvertedHtml.replace(reg, val === `''` ? `` : val);
                        })
                        component.outerHTML = `<!---- THIS COMPONENT URL ${src} -->${ConvertedHtml}`;
                    });
                })
            } else {
                this.getComponent(src, (res) => {
                    this.addScript(res, (HTML) => {
                        component.outerHTML = `<!---- THIS COMPONENT URL ${src} -->${HTML}`;
                    });
                })
            }


            if(components.length > 0 && index === components.length - 1){
                this.startCovertComponent();
                this.startConvertFor();
            }
        })
    }

    static addScript(res, calBack){
        if(res.includes(this.scrName)){
            const startIndexOfScript = res.indexOf(this.scrName);
            const endScript = res.indexOf(this.scrEndName);
            const cropString = res.slice(startIndexOfScript + this.scrName.length, endScript);

            const newScript = document.createElement('script');
            newScript.setAttribute('defer', 'true');
            newScript.innerHTML = cropString;
            document.body.appendChild(newScript);

            calBack(res.slice(0, startIndexOfScript));
        } else {
            calBack(res);
        }
    }

    static startConvertFor(){
        const forTag = document.querySelectorAll('for');
        forTag.forEach((item) => {
            let html = item.innerHTML;
            const count = +item.getAttribute('count');
            const data = item.dataset;

            if(count){
                let _html = '';
                for (let i = 0; i < count; i++){
                    let _htm = html;
                    for (let key in data){
                        const keyArr = data[key].split(',');
                        const reg = new RegExp(`{{${key}}}`, 'g');
                        _htm =  _htm.replace(reg, keyArr[i] === `''` ? '' : keyArr[i]);
                    }
                    _html += _htm + '\n';
                }
                item.outerHTML = _html;
            }
        })
    }

    static getComponent(url, callBack){
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
        callBack(xmlHttp.responseText)
    }
}

forComponent.startCovertComponent();
forComponent.startConvertFor();
