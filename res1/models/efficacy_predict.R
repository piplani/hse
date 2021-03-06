
# Step 1: Include Library
#--------------------------------------------------------------
setwd(paste(getwd(),"/models",sep=""))
args = commandArgs(trailingOnly = TRUE)
dirname = args[1]



#--------------------------------------------------------------
# Step 2: Variable Declaration
#--------------------------------------------------------------
#cat("\nStep 2: Variable Declaration")
modelFileName <- "efficacy_randomForest.RData"
testFileName  <-"efficacyres.csv"


#--------------------------------------------------------------
# Step 3: Model Loading
#--------------------------------------------------------------
#cat("\nStep 3: Model Loading")
load(modelFileName)



#--------------------------------------------------------------
# Step 4: Data Loading
#--------------------------------------------------------------
#cat("\nStep 4: Data Loading")
newTestDataset <- read.csv(paste('../','media/',dirname,'/',testFileName,sep = ''))    # Read the datafile
#head(newTestDataset)


#--------------------------------------------------------------
# Step 5: Prediction (Testing)
#--------------------------------------------------------------
#cat("\nStep 5: Prediction using -> ", modelName)
library(randomForest)
NewPredicted <- predict(model, newTestDataset)
#head(NewPredicted)
#NewPredicted
#--------------------------------------------------------------
# Step 6: Saving Results
#--------------------------------------------------------------
#cat("\nStep 6: Saving Results")
write.csv(data.frame(newTestDataset,NewPredicted), file=paste('../media/',dirname,'/efficacy',modelName,"-Testing-Result.csv",sep=''), row.names=FALSE)
r <- read.csv(paste('../media/',dirname,'/efficacy',modelName,"-Testing-Result.csv",sep=''))
cat(r$NewPredicted)

#cat("\nDone")

#--------------------------------------------------------------
#                           END 
#--------------------------------------------------------------

