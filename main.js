var app = angular.module('surveyScanner', []);
app.controller('mainController', function ($scope){

    $scope.surveyString = "";
    $scope.surveyResult = {};
    $scope.groupsOnly = true;
    $scope.copyResults = function() {
        let computed = "Survey Results\nBelt Total: " + addNumberCommas($scope.surveyResult.m3) + " m3\n\n";

        let longest = 5;
        let groupIndex =0;
        // for(let group of $scope.surveyResult.oreGroups) {
        //     if(group.Group.length > longest)
        //     {
        //         longest = group.Group.length;
        //     }
        // }

        let dif = Math.ceil((longest - 4) / 4);
        computed += "Name";
        for(var i=0; i<dif; ++i){
            computed += "\t";
        }
        computed += "-\tAmount\t-\tAverage\n";


        longest += 1;
        for(let group of $scope.surveyResult.oreGroups) {

            computed += group.Group.substring(0,5);

            let dif = Math.ceil((longest - 5) / 4);
            if(dif > 0){
                for(var i=0; i<dif; ++i){
                    computed += "\t";
                }
            }
            
            computed += "- " + addNumberCommas(group.Amount) + " m3";
            computed += "\t- " + addNumberCommas(group.Average) + " m3\n";
        }
        share(computed);
    }
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
            m3:overall.toFixed(),
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
                Group: group,
                Units: 0,
                Amount: 0,
                Average: 0,
                ores: []
            }
            let oreIndex = 0;
            for(let ore in oreGroups[group].ores)
            {

                castedGroup[index].ores[oreIndex] = {};
                castedGroup[index].ores[oreIndex].ore = oreGroups[group].ores[ore].ore;
                castedGroup[index].ores[oreIndex].units = parseInt(oreGroups[group].ores[ore].units.toFixed());
                castedGroup[index].ores[oreIndex].amount = parseInt(oreGroups[group].ores[ore].amount.toFixed());
                castedGroup[index].ores[oreIndex].groupIndex = index;
                castedGroup[index].ores[oreIndex].average = (oreGroups[group].ores[ore].amount / oreGroups[group].ores[ore].count).toFixed(2);

                castedGroup[index].Units += castedGroup[index].ores[oreIndex].units;
                castedGroup[index].Amount += castedGroup[index].ores[oreIndex].amount;
                castedGroup[index].Average += parseFloat(castedGroup[index].ores[oreIndex].average);

                oreIndex += 1;
            }
            castedGroup[index].Average = (castedGroup[index].Average / oreIndex).toFixed(2);
            index += 1;
        }
        return castedGroup
    }

    function addNumberCommas(number){ 
        return (number + "").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }

    function share(text_to_share) {
        // create temp element
        var copyElement = document.createElement("textArea");

        copyElement.value = text_to_share;

        copyElement.id = 'tempCopyToClipboard';
        angular.element(document.body.append(copyElement));
    
        copyElement.select();
    
        // copy & cleanup
        document.execCommand('copy');
        copyElement.remove();
    }
});