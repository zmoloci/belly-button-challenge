// define URL and load in data using D3

baseURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Call updateData() when change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updateData)

function init() {
    d3.json(baseURL).then(function (data) {
        var options = []
        for (i = 0; i < data.names.length; i++) {
            options.push(data.names[i])
        }
        console.log(options)
        return options
    }).then(function (options) {
        var choices = document.getElementById("selDataset")
        for (j = 0; j < options.length; j++) {
            var opt = options[j];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            choices.appendChild(el);

        }
    }
    )
};

// let samplevalues = []
// let otuids = []
// let otulabels = []
// let id_choice = '949'

// d3.json(baseURL).then(function (data) {
//     console.log(data)

//     if (samplevalues[0].value) {



//         for (i = 0; i < data.samples.length; i++) {
//             if (data.samples[i].id == id_choice) {
//                 console.log(data.samples[i])
//                 for (j = 0; j < 11; j++) {
//                     if (data.samples[i].sample_values[j]) {
//                         samplevalues.push(data.samples[i].sample_values[j])
//                     }
//                     if (data.samples[i].otu_ids[j]) {
//                         otuids.push("OTU " + data.samples[i].otu_ids[j])
//                     }
//                     if (data.samples[i].otu_labels[j]) {
//                         otulabels.push(data.samples[i].otu_labels[j])
//                     }
//                 }
//             }
//         }
//         console.log(samplevalues)
//         console.log(otuids)
//         console.log(otulabels)
//         return [samplevalues, otuids, otulabels]
//     }
// }).then(function ([samplevalues, otuids, otulabels]) {
//     console.log(otuids)
//     let barData = [
//         {
//             x: samplevalues,
//             y: otuids,
//             type: 'bar',
//             orientation: "h"
//         }
//     ];
//     // Bars are showing in ascending order *************** FIX ***
//     var layout = {
//         title: "TEST HBAR",
//         // yaxis: (autorange = "reversed")
//     }
//     Plotly.newPlot("bar", barData, layout);




// });

init();

