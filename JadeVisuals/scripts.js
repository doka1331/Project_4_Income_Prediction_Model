fetch("model_results.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const accuracy = data.accuracy;
    const confusionMatrix = data.confusion_matrix;
    const X_train_pca = data.X_train_pca;
    const X_test_pca = data.X_test_pca;
    const y_train = data.y_train;
    const y_test = data.y_test;
    const flattenedConfusionMatrix = [].concat(...confusionMatrix);

    const ctx = document.getElementById("confusionMatrix").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "True Negatives (0,0)",
          "False Positives (0,1)",
          "False Negatives (1,0)",
          "True Positives (1,1)",
        ],
        datasets: [
          {
            label: "Confusion Matrix",
            data: flattenedConfusionMatrix,
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(54, 162, 235, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: { title: { display: true, text: "Predicted" } },
          y: { title: { display: true, text: "Actual" } },
        },
      },
    });

    // Decision Boundary Visualization using Plotly.js
    const traceTrain = {
      x: X_train_pca.map((point) => point[0]),
      y: X_train_pca.map((point) => point[1]),
      mode: "markers",
      type: "scatter",
      name: "Training Data",
      marker: { color: y_train, colorscale: "Viridis" },
    };

    const traceTest = {
      x: X_test_pca.map((point) => point[0]),
      y: X_test_pca.map((point) => point[1]),
      mode: "markers",
      type: "scatter",
      name: "Test Data",
      marker: { color: y_test, colorscale: "Portland" },
    };

    const layout = {
      title: "Decision Boundary with PCA-transformed Features",
      xaxis: { title: "Principal Component 1" },
      yaxis: { title: "Principal Component 2" },
    };

    Plotly.newPlot("decisionBoundary", [traceTrain, traceTest], layout);
  })
  .catch((error) => console.error("Error loading the JSON data:", error));
