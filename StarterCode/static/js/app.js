// define URL and load in data using D3

baseURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

let samplevalues = []
let otuids = []
let otulabels = []


d3.json(baseURL).then(function (data) {
    console.log(data)

    for (i = 0; i < data.samples.length; i++) {
        console.log(data.samples[i])
        if (i < 10) {
            samplevalues.push(data.samples[i].sample_values)
        }
    }



})