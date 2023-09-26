pipeline {
    agent { any }
    options {
        skipDefaultCheckout true
    }
    environment {
        GIT_SOLUTION = 'https://github.com/Dark762/warehouse-web.git'
        GIT_BRANCH = 'main'
        GIT_SOLUTION_CREDENTIALS = credentials('warehouse-github')
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    try {
                        script {
                            git branch: env.GIT_BRANCH, credentialsId: env.GIT_SOLUTION_CREDENTIALS, url: env.GIT_SOLUTION
                        }

                        echo "hello"
                    } catch (Exception e) {
                        echo 'Exception occurred: ' + e.toString()
                        echo err.getMessage()
                        sh 'Handle the exception!'
                    }
                }
            }
        }
        stage('docker build'){
            steps{
                docker.withServer("tcp://192.168.18.130:4243"){
                    docker.build("warehouse","./Dockerfile")
                }
                
            }
        }
    }
}
