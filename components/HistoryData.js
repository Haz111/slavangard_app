export default class HistoryData {};

HistoryData.editions = [
  {
    "no": 1,
    "year": 2007,
    "description": "opis 2007",
    "people": "ludzie 2007"
  }, {
    "no": 2,
    "year": 2008,
    "description": "",
    "people": ""
  }, {
    "no": 3,
    "year": 2009,
    "description": "",
    "people": ""
  }, {
    "no": 4,
    "year": 2010,
    "description": "opis 2010",
    "people": "ludzie 2010"
  }, {
    "no": 5,
    "year": 2011,
    "description": "",
    "people": ""
  }, {
    "no": 6,
    "year": 2012,
    "description": "",
    "people": ""
  }, {
    "no": 7,
    "year": 2013,
    "description": "",
    "people": ""
  }, {
    "no": 8,
    "year": 2014,
    "description": "",
    "people": ""
  }, {
    "no": 9,
    "year": 2015,
    "description": "",
    "people": ""
  }
]

HistoryData.movies = [
  {
    "movie_id": 1,
    "edition": "1",
    "year": "2007",
    "title": "aaa",
    "youtube": "fcaen",
    "description": "egfsrefg"
  },
  {
    "movie_id": 2,
    "edition": "2",
    "year": "2008",
    "title": "uesrnfd",
    "youtube": "strhytgr",
    "description": "ttyhujtgrf"
  },
  {
    "movie_id": 3,
    "edition": "9",
    "year": "2015",
    "title": "jtgertgs",
    "youtube": "drtrgrrg",
    "description": "rthdryhrg"
  }
]

HistoryData.people = [
  {
    "name": "Janek",
    "photo": "",
    "description": "siema, jestem wesoly Janek"
  },
  {
    "name": "Bartek",
    "photo": "",
    "description": "no hej. to ja"
  }
]

HistoryData.getMoviesByYear = function(year) {
  var moviesToReturn = [];
  if (this.movies === null) return moviesToReturn;
  for (var i = 0; i < this.movies.length; i++) {
    //this two equal sign are intentional, becouse user can passin data number or string
    if (this.movies[i].year != null && this.movies[i].year == year)
      moviesToReturn.push(this.movies[i]);
  }
  return moviesToReturn;
}
