# push :GIT_SHA images to docker hub
docker push mmicalt/multicontainer_api_getter:$GIT_SHA
docker push mmicalt/multicontainer_api_setter:$GIT_SHA
docker push mmicalt/multicontainer_api_worker:$GIT_SHA
docker push mmicalt/multicontainer_client:$GIT_SHA

kubectl apply -f k8s
kubectl set image deployments/getter-deployment getter=mmicalt/multicontainer_api_getter:$GIT_SHA
kubectl set image deployments/setter-deployment setter=mmicalt/multicontainer_api_setter:$GIT_SHA
kubectl set image deployments/worker-deployment worker=mmicalt/multicontainer_api_worker:$GIT_SHA
kubectl set image deployments/client-deployment client=mmicalt/multicontainer_client:$GIT_SHA