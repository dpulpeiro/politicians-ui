# Politicians-web


## 🚀 Makefile usage

Makefile variables that can be customized:

| Variable |     Default     |
|----------|:---------------:|
| DOCKER_IMAGE_NAME | politicians-web |
| PROD_TAG|      0.0.1      |

* Build docker image for development
    ```
    make dev/build
    ```
  
* Run development docker
    ```
    make dev/shell
    ```
  
* Build docker image for production
    ```
    make prod/build
    ```
  
* Run production image on local port 8001
    ```
    make prod/local
    ```

Political parties could be loaded dynamically using an endpoint that could return the result of the following query
```
{ 
  "size": 0,
  "aggs" : {
      "langs" : {
          "terms" : { "field" : "partido_para_filtro.keyword"  }
      }
  }
}
```
