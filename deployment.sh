# build images and tag them with $GIT_SHA
docker build -t mmicalt/multicontainer_api_getter:$GIT_SHA -f./api_getter/Dockerfile ./api_getter
docker build -t mmicalt/multicontainer_api_setter:$GIT_SHA -f./api_setter/Dockerfile ./api_setter
docker build -t mmicalt/multicontainer_api_worker:$GIT_SHA -f./api_worker/Dockerfile ./api_worker
docker build -t mmicalt/multicontainer_client:$GIT_SHA -f./client/Dockerfile ./client

# push :GIT_SHA images to docker hub
docker push mmicalt/multicontainer_api_getter:$GIT_SHA
docker push mmicalt/multicontainer_api_setter:$GIT_SHA
docker push mmicalt/multicontainer_api_worker:$GIT_SHA
docker push mmicalt/multicontainer_client:$GIT_SHA

kubectl apply -f k8s
kubectl set image deployments/getter-deployment getter=mmicalt/multicontainer_api_getter:$GIT_SHA
kubectl set image deployments/setter-deployment getter=mmicalt/multicontainer_api_setter:$GIT_SHA
kubectl set image deployments/worker-deployment getter=mmicalt/multicontainer_api_worker:$GIT_SHA
kubectl set image deployments/client-deployment getter=mmicalt/multicontainer_client:$GIT_SHA