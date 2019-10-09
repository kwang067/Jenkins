pipeline {
    agent any
    environment {
        //be sure to replace "willbla" with your own Docker Hub username
        DOCKER_IMAGE_NAME = "contactkevnation67/chucknorris:latest"
    }
    stages {
        stage('DeployToProduction') {
            when {
                branch 'master'
            }
            environment { 
                CANARY_REPLICAS = 0
            }
            steps {
                input 'Deploy to Production?'
                milestone(1)
                kubernetesDeploy(
                    kubeconfigId: 'KUBECONFIG',
                    configs: 'norris-fact.yml',
                    enableConfigSubstitution: true
                )
                kubernetesDeploy(
                    kubeconfigId: 'KUBECONFIG',
                    configs: 'norris-fact.yml',
                    enableConfigSubstitution: true
                )
            }
        }
    }
}