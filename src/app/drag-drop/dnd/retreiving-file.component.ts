// import {Component} from '@angular/core';
// import {Http, Headers} from '@angular/http';
// import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
// import {bootstrap} from '@angular/platform-browser-dynamic';

// bootstrap(AppComponent, [
//     DND_PROVIDERS // It is required to have 1 unique instance of your service
// ]);

// @Component({
//     selector: 'app',
//     directives: [DND_DIRECTIVES],
//     template: `
// <h4>Simple Drag-and-Drop</h4>
// <div class="row">
   
//     <div class="col-sm-3">
//         <div dnd-droppable class="panel panel-info"
//             (onDropSuccess)="transferDataSuccess($event)">>
//             <div class="panel-heading">Place to drop</div>
//             <div class="panel-body">
//             </div>
//         </div>
//     </div>
// </div>
// `
// })
// export class AppComponent {

//   constructor(private _http: Http) { }

//    /**
//    * The $event is a structure:
//    * {
//    *   dragData: any,
//    *   mouseEvent: MouseEvent
//    * }
//    */
//   transferDataSuccess($event) {
//     // let attachmentUploadUrl = 'assets/data/offerspec/offerspec.json';
//     // loading the FileList from the dataTransfer
//     let dataTransfer: DataTransfer = $event.mouseEvent.dataTransfer;
//     if (dataTransfer && dataTransfer.files) {
      
//       // needed to support posting binaries and usual form values
//       let headers = new Headers();
//       headers.append('Content-Type', 'multipart/form-data');

//       let files: FileList = dataTransfer.files;
  
//       // uploading the files one by one asynchrounusly
//       for (let i = 0; i < files.length; i++) {
//         let file: File = files[i];
  
//         // just for debugging
//         console.log('Name: ' + file.name + '\n Type: ' + file.type + '\n Size: ' + file.size + '\n Date: ' + file.lastModifiedDate);
  
//         // collecting the data to post
//         var data = new FormData();
//         data.append('file', file);
//         data.append('fileName', file.name);
//         data.append('fileSize', file.size);
//         data.append('fileType', file.type);
//         data.append('fileLastMod', file.lastModifiedDate);
  
//         // posting the data
//         this._http
//           .post(attachmentUploadUrl, data, {
//             headers: headers
//           })
//           .toPromise()
//           .catch(reason => {
//             console.log(JSON.stringify(reason));
//           });
//       }
//     }
//   }
// }