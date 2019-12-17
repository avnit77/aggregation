db.articles.aggregate( [
    { $match : { Employments : 'Employed full-time' }, { Country : 'United States'}}
    { $group : {
        _id: null,
        major: "$UndergradMajor",
        devType: "$DevType",
        yearsCoding: "$YearsCoding",
        satisfaction: "JobSatisfaction"
    }}]
);
