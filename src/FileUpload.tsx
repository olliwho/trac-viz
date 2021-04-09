import React, {ChangeEvent, Component} from 'react';
import {Route} from "./Route";


interface Props { 
    routes: Route[]
}

interface State { }

export class FileUpload extends Component<Props, State> {

    private static props: Readonly<Props> = {
        routes: []
    };
    
    // function to read file as binary and return
    private static getFileFromInput(file: File): Promise<any> {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = function () { resolve(reader.result); };
            reader.readAsText(file); // here the file can be read in different way Text, DataUrl, ArrayBuffer
        });
    }
    
    private static manageUploadedFile(content: string) {
        const {routes} = this.props;
        let route = Route.routeFromGpx(content);
        if(route){
            routes.push(route)
        }
    }
    
    private handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        event.persist();
        if (event.target.files !== null) {
            Array.from(event.target.files).forEach(file => {
                FileUpload.getFileFromInput(file)
                    .then((content) => {
                        FileUpload.manageUploadedFile(content);
                    }).catch(function (reason) {
                    console.log(`Error during upload ${reason}`);
                    event.target.value = ''; // to allow upload of same file if error occurs
                });
            });
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input type="file" accept=".gpx" onChange={this.handleFileChange} multiple={true}/>
                    <button onClick={e => e.stopPropagation()}>Upload</button>
                </div>
        </div>
    );
    }
}