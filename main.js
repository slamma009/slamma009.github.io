var app = angular.module('surveyScanner', []);
app.controller('mainController', function ($scope){

    $scope.surveyString = "";
    $scope.surveyResult = {};
    $scope.parseSurvey = function (str) {
        let overall = 0;
        let oreGroups = [];
        let lines = str.trim().split("\n")
        for( let l of lines)
        {
            if(!l.length) continue;
            
            let words = l.trim().split(/\s+/g);
            let name = words.shift()
            let group = name;
            if(words.length === 6)
            {
                group = words.shift(); 
                name += ' '+group; 
            }
    
            let units = words[0];
            let m3 = words[1]
    
            if(!m3 || !units)
                continue;
    
            let m3Number = +m3.replace(/,/g,'');
            let unitsNumber = +units.replace(/,/g,'');
            
            if(isNaN(m3Number) || isNaN(unitsNumber))
                continue;
    
            if(!oreGroups[group]) {
                oreGroups[group] = {
                    group: group,
                    ores: []
                }
            }
            if(!oreGroups[group].ores[name])
            { 
                oreGroups[group].ores[name] = {
                    ore: name,
                    amount: 0,
                    units: 0,
                    count: 0,
                    average: 0
                }
            }
    
    
    
            oreGroups[group].ores[name].units += unitsNumber;
            oreGroups[group].ores[name].amount += m3Number;
            oreGroups[group].ores[name].count++;
            overall += m3Number
        }
    
        $scope.surveyResult = {
            m3:overall,
            oreGroups:toArray(oreGroups)
        }
    };
    
    function toArray(oreGroups)
    {
        let castedGroup = [];
        let index = 0;
        for(let group in oreGroups) 
        {
            castedGroup[index] = {
                index: index,
                ores: []
            }
            let oreIndex = 0;
            for(let ore in oreGroups[group].ores)
            {
                castedGroup[index].group = group;
                castedGroup[index].ores[oreIndex] = oreGroups[group].ores[ore];
                castedGroup[index].ores[oreIndex].groupIndex = index;
                castedGroup[index].ores[oreIndex].average = oreGroups[group].ores[ore].amount / oreGroups[group].ores[ore].count;
                oreIndex += 1;
            }
            index += 1;
        }
        return castedGroup
    }
});