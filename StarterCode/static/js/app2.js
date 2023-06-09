// define URL and load in data using D3

baseURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Call updateData() when change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updateData)

// Dropdown code assist from https://stackoverflow.com/a/9895164
function init() {
    d3.json(baseURL).then(function (data) {
        var options = []
        for (i = 0; i < data.names.length; i++) {
            options.push(data.names[i])
        }
        // console.log(options)
        updateData()

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

// Call updateData() when a change takes place to the dropdown
d3.selectAll("#selDataset").on("change", updateData);

function updateData() {
    let dropdownMenu = d3.select("#selDataset")

    let dataName = dropdownMenu.property("value");

    let samplevalues = []

    // build metadata dictionary
    let choicemeta = {}

    // declare variables for arrays
    let otuids = []

    let otulabels = []
    // id_choice looks to dropdownMenu selection
    let id_choice = dataName

    // define variables for descending bar chart
    let samplevaluesdes = []
    let otuidsbar = []


    d3.json(baseURL).then(function (data) {
        // Uncomment next line to see data in console:
        // console.log(data)

        // Clear child nodes from id="sample-metadata" to 
        // ensure that metadata table does not grow with each
        // user choice in dropdown - only current choice will
        // be displayed.
        const list = document.getElementById("sample-metadata");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild)
        }

        // Build data arrays for visualizations:
        for (i = 0; i < data.samples.length; i++) {
            if (data.samples[i].id == id_choice) {
                // Uncomment below to show samples data in console:
                // console.log(data.samples[i])
                for (j = 0; j < 10; j++) {
                    if (data.samples[i].sample_values[j]) {
                        // append sample_values to samplevalues array
                        samplevalues.push(data.samples[i].sample_values[j])
                        // append sample_values to end of samplevaluesdes array
                        samplevaluesdes.unshift(data.samples[i].sample_values[j])
                    }
                    if (data.samples[i].otu_ids[j]) {
                        // append otu_id to end of otuids array
                        otuids.push(data.samples[i].otu_ids[j])
                        // append otu_id to beginning of otuidsbar array
                        otuidsbar.unshift("OTU " + data.samples[i].otu_ids[j])
                    }
                    if (data.samples[i].otu_labels[j]) {
                        // append otu_labels to otulabels array
                        otulabels.push(data.samples[i].otu_labels[j])
                    }
                }
                if (data.metadata[i].id = id_choice) {
                    // choicemeta.push(data.metadata[i])
                    choicemeta.age = data.metadata[i]["age"]
                    choicemeta.bbtype = data.metadata[i]["bbtype"]
                    choicemeta.ethnicity = data.metadata[i]["ethnicity"]
                    choicemeta.gender = data.metadata[i]["gender"]
                    choicemeta.id = data.metadata[i]["id"]
                    choicemeta.location = data.metadata[i]["location"]
                    choicemeta.wfreq = data.metadata[i]["wfreq"]
                }
            }
        }
        // uncomment console.log lines below to test data format/values:
        // console.log(samplevalues)
        // console.log(otuids)
        // console.log(otulabels)
        // console.log(samplevaluesdes)
        // console.log(choicemeta[2])
        return [samplevalues, otuids, otulabels, samplevaluesdes, choicemeta]

    }).then(function ([samplevalues, otuids, otulabels, samplevaluesdes, choicemeta]) {

        // Build Metadata table based on user drop-down selection:
        var choicemetadata = document.getElementById("sample-metadata")

        for (const [key, value] of Object.entries(choicemeta)) {
            var opt = key + ": " + value;
            var el = document.createElement("ul");
            el.textContent = opt;
            el.value = opt;
            choicemetadata.appendChild(el)
        }
        // Show initial directions to user "Choose ID Number from Dropdown"
        // until user selects an ID in the dropdown, then display ID selection
        // as part of chart titles:
        if (dataName == "init") {
            chartTitle = "Choose ID Number from Dropdown";
        }
        else {
            chartTitle = "Microbial Species Concentrations for Test Subject ID No. " + choicemeta.id
        }
        // Build horizontal bar chart using Plotly:
        let barData = [
            {
                // Use arrays that have been sorted descending
                x: samplevaluesdes,
                y: otuidsbar,
                type: 'bar',
                orientation: "h",
                text: otulabels
            
            }
        ];
        var layout = {
            title: chartTitle,

        }
        Plotly.newPlot("bar", barData, layout);



        return [samplevalues, otuids]


    }).then(function ([samplevalues, otuids]) {
        // Build trace for Bubble chart
        var trace1 = {
            x: otuids,
            y: samplevalues,
            mode: 'markers',
            text: otulabels.map(i => "Species: " + i),
            // color is fine. size could use some tweaking - some marker size scale 
            // are greater than that of the graph (i.e. a point that has a value of 650
            // is represented by a circle that is larger than 650 units on either axis
            marker: { color: otuids, size: samplevalues }
        };
        var bubdata = [trace1];
        var layout = {
            title: chartTitle,
            showlegend: false,
            // Dynamically adjust y-axis based on ID selected in dropdown (1.5x maximum samplevalue)
            yaxis: { range: [0, 1.5 * Math.max.apply(Math, samplevalues)] }
        };
        Plotly.newPlot('bubble', bubdata, layout)
        // Uncomment the following two lines to test samplevalues and y-axis scaling:
        // console.log(Math.max.apply(Math, samplevalues))
        // console.log(samplevalues)
    });
};
// Init function to load bar and bubble chart axes and instructions
init();