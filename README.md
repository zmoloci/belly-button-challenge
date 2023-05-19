# belly-button-challenge

# Module 14 Challenge: Building a dashboard to analyze Belly Button Biodiversity 

## Belly Button Biodiversity Dashboard
A web based tool for visualizing the Belly Button Biodiversity data

## Introduction
This dashboard assists the user in visualizing Belly Button Biodiversity data. Specifically, the presence and concentration of different operational taxonomic units for a number of different test subjects.

## Usage
- [Click on this link in order to view on the internet!](https://zmoloci.github.io/belly-button-challenge/)
- Offline: Run index.html. This will take data from the included [Samples.JSON file](https://github.com/zmoloci/belly-button-challenge/blob/main/data/samples.json) and visualize the data on the dashboard's metadata table, bar chart and bubble chart.
- Use the dropdown to select a Test Subject ID No.

## Appendix Table of Contents
- Datasets
- GitHub Main
- Team Members/Contributors
- Acknowledgements
- License

## Datasets
- [Crime in Vancouver dataset from Kaggle](https://www.kaggle.com/datasets/wosaku/crime-in-vancouver)
    - Summarized dataset utilizing data from https://opendata.vancouver.ca/pages/home/ with coordinates converted into standard lat/long.
    - Provides comprehensive stats on criminal incidents in Vancouver from 2005-2017
    - Due to rental dataset restrictions, only data from 2010-2017 is used in this tool
- [Vancouver primary rental housing dataset from CMHC (Canadian Mortgage and Housing Corporation)](https://www03.cmhc-schl.gc.ca/hmip-pimh/en/TableMapChart/Table?TableId=2.1.31.3&GeographyId=2410&GeographyTypeId=3&DisplayAs=Table&GeograghyName=Vancouver)
    - Provides comprehensive stats on rental pricing and availability of primary housing in Vancouver from 2010 to 2023

## GitHub Main 
- Data
    - Contains Raw, Cleaned, and SQL folders. These represent the steps taken formatting the data sources and inputting into a final vancouver.sqlite database. The SQL folder also contains the ERD parameters used in creating the SQL tables used.
- Images
    - Used for storing the ERD as well as Dashboard napkin sketch concepts
- Static
    - .CSS, .HTML and .JS scripts required to make the Javascript frontend run
- app.py
    - Script required to make the Python Flask backend run. 
- Proposal.md
    - Initial project proposal 4/11/23. Subject to change for final report.
- Index.html
    - Main dashboard frontend to interact with

## Team Members
- Zac Corbett
- Lynn Hoang
- Sameer Zubairi
- Christopher Yang 

## Acknowledgements
We would like to thank the University of Toronto for putting together a robust program for Data Analytics, and my fellow classmates as well as the wonderful Instructors and LAs at the University of Toronto for their support.

Some additional resources utilized to complete this project include:
- [This blog post by Diane Phan on Twilio](https://www.twilio.com/blog/deploy-flask-python-app-aws) explaining how to use a Flask App on AWS
- [This medium post by Frank Cleary](https://jqn.medium.com/deploy-a-flask-app-on-aws-ec2-1850ae4b0d41) on setting up Apache2 and providing inspiration on how to add our website online
- ChatGPT was used to explain how to use the CORS_flask wrapper to enable cross origin requests in the flask backend API.

## License
This is licensed under the MIT licensing scheme. Please see separate License File for information.
