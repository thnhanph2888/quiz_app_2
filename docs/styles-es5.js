(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, ".my-row {\r\n  --bs-gutter-x: 0rem;\r\n  --bs-gutter-y: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.my-button {\r\n  margin: 0.2em;\r\n  background-image: linear-gradient(#2c6621, #143d02);\r\n  border: 2px solid #1fb300;\r\n  font-size: 1.2em;\r\n  color: white;\r\n  border-radius: 1em;\r\n  padding: 0.2em 1.2em 0.2em;\r\n}\r\n\r\n.my-button:hover {\r\n  margin: 0.2em;\r\n  background-image: linear-gradient(#1b3b15, #143d02);\r\n  border: 2px solid #1fb300;\r\n  font-size: 1.2em;\r\n  color: white;\r\n  border-radius: 1em;\r\n  padding: 0.2em 1.2em 0.2em;\r\n}\r\n\r\n.my-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n}\r\n\r\n.loader-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh; /* Set the container height to full viewport height */\r\n}\r\n\r\n.loader {\r\n  border: 4px solid #95db34; /* Màu của phần đang loading */\r\n  border-top: 4px solid transparent;\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 9999;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 15% auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 400px;\r\n  max-width: 90%;\r\n  text-align: center;\r\n}\r\n\r\n.close {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\nh2 {\r\n  margin-top: 0;\r\n}\r\n\r\n.button-container {\r\n  margin-top: 20px;\r\n}\r\n\r\nbutton {\r\n  margin-right: 5px;\r\n  padding: 10px 20px;\r\n  background-color: #3085d6;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #3f92de;\r\n}\r\n\r\nbutton.cancel {\r\n  background-color: #aaa;\r\n}\r\n\r\n@media only screen and (min-width: 0px) {\r\n\r\n  .col-mxs-1 {\r\n    width: 8.33333%;\r\n  }\r\n\r\n  .col-mxs-2 {\r\n    width: 16.66667%;\r\n  }\r\n\r\n  .col-mxs-3 {\r\n    width: 25%;\r\n  }\r\n\r\n  .col-mxs-4 {\r\n    width: 33.33333%;\r\n  }\r\n\r\n  .col-mxs-5 {\r\n    width: 41.66667%;\r\n  }\r\n\r\n  .col-mxs-6 {\r\n    width: 50%;\r\n  }\r\n\r\n  .col-mxs-7 {\r\n    width: 58.33333%;\r\n  }\r\n\r\n  .col-mxs-8 {\r\n    width: 66.66667%;\r\n  }\r\n\r\n  .col-mxs-9 {\r\n    width: 75%;\r\n  }\r\n\r\n  .col-mxs-10 {\r\n    width: 83.33333%;\r\n  }\r\n\r\n  .col-mxs-11 {\r\n    width: 91.66667%;\r\n  }\r\n\r\n  .col-mxs-12 {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 576px) {\r\n\r\n\r\n  .col-msm-1 {\r\n    width: 8.33333%;\r\n  }\r\n\r\n  .col-msm-2 {\r\n    width: 16.66667%;\r\n  }\r\n\r\n  .col-msm-3 {\r\n    width: 25%;\r\n  }\r\n\r\n  .col-msm-4 {\r\n    width: 33.33333%;\r\n  }\r\n\r\n  .col-msm-5 {\r\n    width: 41.66667%;\r\n  }\r\n\r\n  .col-msm-6 {\r\n    width: 50%;\r\n  }\r\n\r\n  .col-msm-7 {\r\n    width: 58.33333%;\r\n  }\r\n\r\n  .col-msm-8 {\r\n    width: 66.66667%;\r\n  }\r\n\r\n  .col-msm-9 {\r\n    width: 75%;\r\n  }\r\n\r\n  .col-msm-10 {\r\n    width: 83.33333%;\r\n  }\r\n\r\n  .col-msm-11 {\r\n    width: 91.66667%;\r\n  }\r\n\r\n  .col-msm-12 {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n\r\n  .col-mmd-1 {\r\n    width: 8.33333%;\r\n  }\r\n\r\n  .col-mmd-2 {\r\n    width: 16.66667%;\r\n  }\r\n\r\n  .col-mmd-3 {\r\n    width: 25%;\r\n  }\r\n\r\n  .col-mmd-4 {\r\n    width: 33.33333%;\r\n  }\r\n\r\n  .col-mmd-5 {\r\n    width: 41.66667%;\r\n  }\r\n\r\n  .col-mmd-6 {\r\n    width: 50%;\r\n  }\r\n\r\n  .col-mmd-7 {\r\n    width: 58.33333%;\r\n  }\r\n\r\n  .col-mmd-8 {\r\n    width: 66.66667%;\r\n  }\r\n\r\n  .col-mmd-9 {\r\n    width: 75%;\r\n  }\r\n\r\n  .col-mmd-10 {\r\n    width: 83.33333%;\r\n  }\r\n\r\n  .col-mmd-11 {\r\n    width: 91.66667%;\r\n  }\r\n\r\n  .col-mmd-12 {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n\r\n  .col-mlg-1 {\r\n    width: 8.33333%;\r\n  }\r\n\r\n  .col-mlg-2 {\r\n    width: 16.66667%;\r\n  }\r\n\r\n  .col-mlg-3 {\r\n    width: 25%;\r\n  }\r\n\r\n  .col-mlg-4 {\r\n    width: 33.33333%;\r\n  }\r\n\r\n  .col-mlg-5 {\r\n    width: 41.66667%;\r\n  }\r\n\r\n  .col-mlg-6 {\r\n    width: 50%;\r\n  }\r\n\r\n  .col-mlg-7 {\r\n    width: 58.33333%;\r\n  }\r\n\r\n  .col-mlg-8 {\r\n    width: 66.66667%;\r\n  }\r\n\r\n  .col-mlg-9 {\r\n    width: 75%;\r\n  }\r\n\r\n  .col-mlg-10 {\r\n    width: 83.33333%;\r\n  }\r\n\r\n  .col-mlg-11 {\r\n    width: 91.66667%;\r\n  }\r\n\r\n  .col-mlg-12 {\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n\r\n  .col-mxl-1 {\r\n    width: 8.33333%;\r\n  }\r\n\r\n  .col-mxl-2 {\r\n    width: 16.66667%;\r\n  }\r\n\r\n  .col-mxl-3 {\r\n    width: 25%;\r\n  }\r\n\r\n  .col-mxl-4 {\r\n    width: 33.33333%;\r\n  }\r\n\r\n  .col-mxl-5 {\r\n    width: 41.66667%;\r\n  }\r\n\r\n  .col-mxl-6 {\r\n    width: 50%;\r\n  }\r\n\r\n  .col-mxl-7 {\r\n    width: 58.33333%;\r\n  }\r\n\r\n  .col-mxl-8 {\r\n    width: 66.66667%;\r\n  }\r\n\r\n  .col-mxl-9 {\r\n    width: 75%;\r\n  }\r\n\r\n  .col-mxl-10 {\r\n    width: 83.33333%;\r\n  }\r\n\r\n  .col-mxl-11 {\r\n    width: 91.66667%;\r\n  }\r\n\r\n  .col-mxl-12 {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBOztFQUVFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFRjs7QUFFQTs7RUFFRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1yb3cge1xyXG4gIC0tYnMtZ3V0dGVyLXg6IDByZW07XHJcbiAgLS1icy1ndXR0ZXIteTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm15LWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwLjJlbTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzJjNjYyMSwgIzE0M2QwMik7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFmYjMwMDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgcGFkZGluZzogMC4yZW0gMS4yZW0gMC4yZW07XHJcbn1cclxuXHJcbi5teS1idXR0b246aG92ZXIge1xyXG4gIG1hcmdpbjogMC4yZW07XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxYjNiMTUsICMxNDNkMDIpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxZmIzMDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIHBhZGRpbmc6IDAuMmVtIDEuMmVtIDAuMmVtO1xyXG59XHJcblxyXG4ubXktd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubG9hZGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7IC8qIFNldCB0aGUgY29udGFpbmVyIGhlaWdodCB0byBmdWxsIHZpZXdwb3J0IGhlaWdodCAqL1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjOTVkYjM0OyAvKiBNw6B1IGPhu6dhIHBo4bqnbiDEkWFuZyBsb2FkaW5nICovXHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogMTUlIGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4NWQ2O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5MmRlO1xyXG59XHJcblxyXG5idXR0b24uY2FuY2VsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSB7XHJcblxyXG4gIC5jb2wtbXhzLTEge1xyXG4gICAgd2lkdGg6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1teHMtMiB7XHJcbiAgICB3aWR0aDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1teHMtMyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1teHMtNCB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1teHMtNSB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1teHMtNiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1teHMtNyB7XHJcbiAgICB3aWR0aDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1teHMtOCB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1teHMtOSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1teHMtMTAge1xyXG4gICAgd2lkdGg6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wtbXhzLTExIHtcclxuICAgIHdpZHRoOiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW14cy0xMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuXHJcblxyXG4gIC5jb2wtbXNtLTEge1xyXG4gICAgd2lkdGg6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tc20tMiB7XHJcbiAgICB3aWR0aDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tc20tMyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tc20tNCB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tc20tNSB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tc20tNiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tc20tNyB7XHJcbiAgICB3aWR0aDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tc20tOCB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tc20tOSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tc20tMTAge1xyXG4gICAgd2lkdGg6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wtbXNtLTExIHtcclxuICAgIHdpZHRoOiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1zbS0xMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgLmNvbC1tbWQtMSB7XHJcbiAgICB3aWR0aDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1tZC0yIHtcclxuICAgIHdpZHRoOiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1tZC0zIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1tZC00IHtcclxuICAgIHdpZHRoOiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1tZC01IHtcclxuICAgIHdpZHRoOiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1tZC02IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1tZC03IHtcclxuICAgIHdpZHRoOiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1tZC04IHtcclxuICAgIHdpZHRoOiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1tZC05IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1tZC0xMCB7XHJcbiAgICB3aWR0aDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tbWQtMTEge1xyXG4gICAgd2lkdGg6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wtbW1kLTEyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAuY29sLW1sZy0xIHtcclxuICAgIHdpZHRoOiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWxnLTIge1xyXG4gICAgd2lkdGg6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWxnLTMge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWxnLTQge1xyXG4gICAgd2lkdGg6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWxnLTUge1xyXG4gICAgd2lkdGg6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWxnLTYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWxnLTcge1xyXG4gICAgd2lkdGg6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWxnLTgge1xyXG4gICAgd2lkdGg6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWxnLTkge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWxnLTEwIHtcclxuICAgIHdpZHRoOiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1sZy0xMSB7XHJcbiAgICB3aWR0aDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tbGctMTIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbiAgLmNvbC1teGwtMSB7XHJcbiAgICB3aWR0aDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW14bC0yIHtcclxuICAgIHdpZHRoOiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW14bC0zIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLW14bC00IHtcclxuICAgIHdpZHRoOiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW14bC01IHtcclxuICAgIHdpZHRoOiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW14bC02IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLW14bC03IHtcclxuICAgIHdpZHRoOiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW14bC04IHtcclxuICAgIHdpZHRoOiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLW14bC05IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLW14bC0xMCB7XHJcbiAgICB3aWR0aDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1teGwtMTEge1xyXG4gICAgd2lkdGg6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wtbXhsLTEyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\project\angular\quiz-app\quiz-app\src\styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map