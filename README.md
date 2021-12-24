# Local dev environment
# Configuration 
cp .env.example .env

# create data example :
POST http://localhost:3000/data
{
    "startDate" : "1640337000000",
    "endDate": "1640337342000",
    "data": "test"
}

# get data example :
GET http://localhost:3000/data/search?startDate=1640336000000&endDate=1640338342000