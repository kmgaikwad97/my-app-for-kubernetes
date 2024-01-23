# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Commands used

1001  docker build -t kshitijg/react-app-k8:1 .
 1002  docker build -t kshitijg/react-app-k8:1 .
 1003  docker scout quickview
 1004  docker push docker.io/kshitijg/react-app-k8:1
 1005  docker push kshitijg/react-app-k8
 1006  docker push kshitijg/react-app-k8:01
 1007  docker push kshitijg/react-app-k8:1
 1008  docker logout
 1009  docker login
 1010  docker build -t kshitijg/react-app-k8:1 .
 1011  docker push kshitijg/react-app-k8:1
 1012  minikube start
 1013  minikube status
 1014  kubectl create deplyment react-app-k8 --image=kshitijg/react-app-k8:1 
 1015  kubectl create deployment react-app-k8 --image=kshitijg/react-app-k8:1 
 1016  kubectl get deployments
 1017  kubectl describe deployment react-app-k8
 1018  kubectl logs -l app=react-app-k8\n
 1019  kubectl get pods
 1020  minukube dashboard
 1021  minikube dashboard
 1022  kubectl expose deployment react-app-k8 -type=LoadBalancer --port=3000
 1023  kubectl expose deployment react-app-k8 --type=LoadBalancer --port=3000
 1024  kubectl get services
 1025  minikube service react-app-k8
 1026  docker login
 1027  docker build -t kshitijg/react-app-k8:2 .
 1028  docker push kshitijg/react-app-k8:2
 1029  get deployment pods
 1030  kubectl get deployments
 1031  kubectl get pods
 1032  minikube dashboard
 1033  kubectl set image deployment react-app-k8 react-app-k8=kshitijg/react-app-k8:2   
 1034  kubectl get pods
 1035  kubectl get pods
 1036  kubectl get pods
 1037  kubectl logs react-app-k8-cb94464fb-7w2mh
 1038  kubectl get deployments
 1039  kubectl describe deployments react-app-k8
 1040  kubectl get pods
 1041  kubectl expose deployment react-app-k8 --type=LoadBalancer --port=3000
 1042  kubectl get servies
 1043  kubectl get services
 1044  minikube services react-app-k8
 1045  minikube service react-app-k8
 1046  history