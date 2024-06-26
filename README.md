# Project_4_Income_Prediction_Model
Hello and Welcome to our collection of Machine Learning Models.
In this project, we use a collection of Supervised and Unsupervised Machine Learning Models to split and test data 
to see which model would perform best in predicting whether or not an individual's income exceeds or does not exceed $50,000 yearly. 
The supervised models were used more for future predicting while the unsupervised machine learning models were used for data shape visualization.
The raw dataset we used was collected by the US Census from 1994 and was compiled/downloaded from Kaggle titled: "adult.csv".

### Michael's Models
Within the Folder titled "Completed_Script_Kang" is the "Resources" folder that contains both the cleaned and raw data. There is also an ETL script titled "ETL_Script.ipynb" that transforms that raw data into the cleaned data via Jupyter notebook and Pandas manipulation. The script "Supervised_Income_Regression_Model.ipynb" contains the script for my supervised machine logistic regression model that was used to predict if an individual's yearly income does not exceed, is equal to, or exceeds $50,000 based on their other recorded statistics. The script "Unsupervised_PCA_Model_Comparison_Kang.ipynb" contains the script for my base KMeans clustering unsupervised model as well as the script for my PCA KMeans clustering unsupervised model. 

### Summary of Results for Michael's Supervised Machine Learning Model

Class 0 Performance: The model performs very well in identifying instances of class 0 (individuals who make a yearly salary that equates or does not exceed $50k) with high precision (0.86) and recall (0.92). This indicates that the model is very good at correctly predicting if individuals make a yearly salary that equates or is less than $50k.
Class 1 Performance: The model performs moderately well in identifying instances of class 1 (individuals who make a yearly salary that exceeds $50k), with lower precision (0.70) and recall (0.57). This suggests the model struggles more with correctly predicting if individuals make a yearly salary that exceeds $50k.
Overall Performance: The overall accuracy of the model is 0.83, indicating that the model correctly predicts the income category for 83% of the total number of observed instances. The weighted averages also suggest that the model performs better on the majority class (class 0) but has room for improvement on the minority class (class 1).

Suggested Improvements

Address Class Imbalance: The model performs significantly better on class 0 compared to class 1, likely due to class imbalance. Techniques like oversampling the minority class, under sampling the majority class could help improve performance on class 1.
Model Tuning: Adjusting hyperparameters or trying different algorithms (e.g., Random Forest, Gradient Boosting) could potentially yield better results.
Regularization: Applying regularization techniques (e.g., L1, L2) might help improve generalization.

### Summary of Michael's Unsupervised Machine Learning Model Base and PCA
What is the total explained variance of the two principal components?
    98.72%

What is the best value for k when using the PCA data?
    2

Does it differ from the best k value found using the original data?
    No, the original best k-value was also 2.

The Principle Component Analysis model data was linearly skewed to the right as opposed to the base model data that seemed to have no structure at all. 
When data is right-skewed, or positively skewed, it means that the distribution is longer on the right side of its peak than on the left. This results in a long tail on the right side of the distribution, and a skewness value that is greater than zero. The two clusters seemed to have a clear and distinct division straight down the middle in both the base and PCA models which represents the model's accuracy and precision in determining income cluster groups for individuals.  

Sources:
ChatGPT version 3.5: https://chatgpt.com/c/d83cb97e-9d55-4888-954d-c7f2e1cdd9fa

### Tyler's Models
#### Model 1: Logistic Regression
The first model achieves an accuracy of 83.26% which outperforms the goal of 75%. The 83.26% represents the total predictions (both income below and above 50k) that were correct.
The classification report for class 0 (those who's income is less than or greater to 50k) shows a precision of 87% (of all predictions in this class, 87% were correct) and a recall of 92%. This high recall suggests the model is very efficient in identifying those making under 50k and is not likely to miss those cases.
The classification report for class 1 (those who's income is more than 50k) shows a precision of 70% and a recall of 58%. Both are lower than class 0, meaning we're less efficient at identifying those who's income is more than 50k per year. Specifically with recall being 58%, we are missing a significant number of individuals in this class. In order to attempt to make improvements on this model, we will create another Logistic Regression model with some modifications.

#### Model 2: Logistic Regression
The second model achieves an accuracy of 83.26% which is exactly the same as the first model. The classification report shows the same results too. This shows that the logistic regression model we are using is not sensitive at all to changes in parameters. This is an indication that the original model was already near-optimal and there's not much that can be done to improve this specific model.

#### Model 3: Random Forest Model
Once again, we observe the same results of 83.26% accuracy and the same classification report. There a couple reasons for this. The first is a strong baseline performance. The initial model we made may have been so good at identifying the patterns in the data, that adding both changes to the parameters OR changing models entirely might not provide a significant (or any) benefit. This can be explained with data that is considered to strongly be linear and/or the initial set of features do more than enough in the prediction process that nothing more can be done. In order to try to narrow down the specific variables that might be more impactful, let's create a visualization of some different features.

#### Model 4: Logistic Regression
Although we finally see a change in the outcome, it's unfortunately not a change in the right direction. Instead of the 83.26% accuracy we achieved before, this model sees a 75.03% accuracy, which barely reaches our goal. This suggests that isolating what showed to be the more "correlated" variables not only didn't help the model, it significantly hurt the model. On top of that, all other numbers on the classification report dropped, except for the recall score for class 0. This is an indication that the model with isolated features is worse in many ways but can potentially outperform the other models in correctly identifying those who will make less than 50k. Overall, this model should not be used or built upon and we should return to trying other ideas.

### Jade's Models
I created a supervised learning model and decided to visualize the confusion matrix and PCA scatter plot. The confusion matrix shows all possibilities with the predictions of the model, true positives and negatives, and false positives and negatives. The PCA scatter plot is an interactive model showing the test and training data. Purple and blue represent 0 or individuals with income less than 50k. Red and yellow represent 1 or individuals with income greater than 50k. Clear clusters show the model’s ability to distinguish between income classes. Overall we can visually see that our models were good at predicting income based on various factors given. Using HTML, JavaScript, and CSS, we were able to display and make the visualizations interactive to better visualize the accuracy of our model predictions.

SOURCES:
https://www.sciencedirect.com/topics/engineering/confusion-matrix 
https://machinelearningmastery.com/principal-component-analysis-for-visualization/ 
