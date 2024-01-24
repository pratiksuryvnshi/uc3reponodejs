pipeline {
    agent any
    environment{
        dockerhub=credentials('docker')
    }
    
    stages {
        stage('Git Checkout....') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'Git', url: 'https://github.com/mayankgg2511/uc3reponodejs.git']]])
            }
        }
        
        stage('Build Docker Image....') {
            steps {
                sh 'docker build -t mayankgg2511/batch738devops:latest . '
            }
        }
        
        stage('Publish Artifacts To Dockerhub....') {
            steps {
                sh 'docker image ls'
                sh 'docker logout'
                sh 'echo $dockerhub_PSW | docker login -u $dockerhub_USR --password-stdin docker.io'
                sh 'docker push mayankgg2511/batch738devops:latest'
            }
        }
        
        stage('Deploying App to Kubernetes') {
            steps {
                script {
                     kubernetesDeploy(configs: "nodejs-app-deploy.yml", kubeconfigId: "kubernetes")
                        }
                  }
        }
    }
}
