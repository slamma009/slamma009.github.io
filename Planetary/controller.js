app.controller('planetryController', function ($scope) {


    $scope.ResourceKeys = [];
    $scope.Resources = {
        AqueousLiquids: { Resource: "Aqueous Liquids", Processed: "Water", Active: true },
        Autotrophs: {Resource:"Autotrophs", Processed: "Industrial Fibers", Active: true },
        BaseMetals: { Resource: "Base Metals", Processed: "Reactive Metals", Active: true },
        NobleMetals: { Resource: "Noble Metals", Processed: "Precious Metals", Active: true },
        HeavyMetals: { Resource: "Heavy Metals", Processed: "Toxic Metals", Active: true },
        CarbonCompounds: { Resource: "Carbon Compounds", Processed: "Biofuels", Active: true },
        ComplexOrganisms: { Resource: "Complex Organisms", Processed: "Proteins", Active: true },
        MicroOrganisms: { Resource: "Micro Organisms", Processed: "Bacteria", Active: true },
        IonicSolutions: { Resource: "Ionic Solutions", Processed: "Electrolytes", Active: true },
        NobleGas: { Resource: "Noble Gas", Processed: "Oxygen", Active: true },
        ReactiveGas: { Resource: "Reactive Gas", Processed: "Oxidizing Compound", Active: true },
        PlankticColonies: { Resource: "Planktic Colonies", Processed: "Biomass", Active: true },
        FelsicMagma: { Resource: "Felsic Magma", Processed: "Silicon", Active: true },
        NonCSCrystals: { Resource: "Non-CS Crystals", Processed: "Chiral Structures", Active: true },
        SuspendedPlasma: { Resource: "Supsended Plasma", Processed: "Plasmoids", Active: true }
    }

    $scope.RefinedKeys = [];
    $scope.Refined = {
        Biocells: { Name: "Biocells", Active: true, 
        Resources: [$scope.Resources.CarbonCompounds, $scope.Resources.NobleMetals]},
        ConstructionBlocks: { Name: "Construction Blocks", Active: true, 
        Resources: [$scope.Resources.BaseMetals, $scope.Resources.HeavyMetals]},
        ConsumerElectronics: { Name: "Consumer Electronics", Active: true, 
        Resources: [$scope.Resources.HeavyMetals, $scope.Resources.NonCSCrystals]},
        Coolant: { Name: "Coolant", Active: true, 
        Resources: [$scope.Resources.AqueousLiquids, $scope.Resources.IonicSolutions]},
        EnrichedUranium: { Name: "Enriched Uranium", Active: true, 
        Resources: [$scope.Resources.HeavyMetals, $scope.Resources.NobleMetals]},
        Fertilizer: { Name: "Fertilizer", Active: true, 
        Resources: [$scope.Resources.ComplexOrganisms, $scope.Resources.MicroOrganisms]},
        GenEnhancedLivestock: { Name: "Gen. Enhanced Livestock", Active: true, 
        Resources: [$scope.Resources.ComplexOrganisms, $scope.Resources.PlankticColonies]},
        Livestock: { Name: "Livestock", Active: true, 
        Resources: [$scope.Resources.CarbonCompounds, $scope.Resources.ComplexOrganisms]},
        MechanicalParts: { Name: "Mechanical Parts", Active: true, 
        Resources: [$scope.Resources.BaseMetals, $scope.Resources.NobleMetals]},
        MicrofiberShielding: { Name: "Microfiber Shielding", Active: true, 
        Resources: [$scope.Resources.Autotrophs, $scope.Resources.FelsicMagma]},
        MiniatureElectronics: { Name: "Miniature Electronics", Active: true, 
        Resources: [$scope.Resources.FelsicMagma, $scope.Resources.NonCSCrystals]},
        Nanites: { Name: "Nanites", Active: true, 
        Resources: [$scope.Resources.BaseMetals, $scope.Resources.MicroOrganisms]},
        Oxides: { Name: "Oxides", Active: true, 
        Resources: [$scope.Resources.NobleGas, $scope.Resources.ReactiveGas]},
        Polyaramids: { Name: "Polyaramids", Active: true, 
        Resources: [$scope.Resources.Autotrophs, $scope.Resources.ReactiveGas]},
        Polytextiles: { Name: "Polytextiles", Active: true, 
        Resources: [$scope.Resources.Autotrophs, $scope.Resources.CarbonCompounds]},
        RocketFuel: { Name: "Rocket Fuel", Active: true, 
        Resources: [$scope.Resources.IonicSolutions, $scope.Resources.SuspendedPlasma]},
        SilicateGlass: { Name: "Silicate Glass", Active: true, 
        Resources: [$scope.Resources.FelsicMagma, $scope.Resources.ReactiveGas]},
        Superconductors: { Name: "Superconductors", Active: true, 
        Resources: [$scope.Resources.AqueousLiquids, $scope.Resources.SuspendedPlasma]},
        SupertensilePlastics: { Name: "Supertensile Plastics", Active: true, 
        Resources: [$scope.Resources.NobleGas, $scope.Resources.PlankticColonies]},
        SyntheticOil: { Name: "Synthetic Oil", Active: true, 
        Resources: [$scope.Resources.IonicSolutions, $scope.Resources.NobleGas]},
        TestCultures: { Name: "Test Cultures", Active: true, 
        Resources: [$scope.Resources.AqueousLiquids, $scope.Resources.MicroOrganisms]},
        Transmitter: { Name: "Transmitter", Active: true, 
        Resources: [$scope.Resources.NonCSCrystals, $scope.Resources.SuspendedPlasma]},
        ViralAgent: { Name: "Viral Agent", Active: true, 
        Resources: [$scope.Resources.MicroOrganisms, $scope.Resources.PlankticColonies]},
        WaterCooledCPU: { Name: "Water-Cooled CPU", Active: true, 
        Resources: [$scope.Resources.AqueousLiquids, $scope.Resources.BaseMetals]}
    }

    $scope.SpecializedKeys = [];
    $scope.Specialized = {

        BiotechResearchReports: { Name: "Biotech Research Reports", Active: true,
        Refined: [$scope.Refined.ConstructionBlocks, $scope.Refined.Livestock, $scope.Refined.Nanites]},
        CameraDrones: { Name: "Camera Drones", Active: true,
        Refined: [$scope.Refined.RocketFuel, $scope.Refined.SilicateGlass]},
        Condensates: { Name: "Condensates", Active: true,
        Refined: [$scope.Refined.Coolant, $scope.Refined.Oxides]},
        CryoprotectantSolution: { Name: "Cryoprotectant Solution", Active: true,
        Refined: [$scope.Refined.Fertilizer, $scope.Refined.SyntheticOil, $scope.Refined.TestCultures]},
        DataChips: { Name: "Data Chips", Active: true,
        Refined: [$scope.Refined.MicrofiberShielding, $scope.Refined.SupertensilePlastics]},
        GelMatrixBiopaste: { Name: "Gel-Matrix Biopaste", Active: true,
        Refined: [$scope.Refined.Biocells, $scope.Refined.Oxides, $scope.Refined.Superconductors]},
        GuidanceSystems: { Name: "Guidance Systems", Active: true,
        Refined: [$scope.Refined.Transmitter, $scope.Refined.WaterCooledCPU]},
        HazmatDetectionSystems: { Name: "Hazmat Detection Systems", Active: true,
        Refined: [$scope.Refined.Polytextiles, $scope.Refined.Transmitter, $scope.Refined.ViralAgent]},
        HermeticMembranes: { Name: "Hermetic Membranes", Active: true,
        Refined: [$scope.Refined.GenEnhancedLivestock, $scope.Refined.Polyaramids]},
        HighTechTransmitters: { Name: "High-Tech Transmitters", Active: true,
        Refined: [$scope.Refined.Polyaramids, $scope.Refined.Transmitter]},
        IndustrialExplosives: { Name: "Industrial Explosives", Active: true,
        Refined: [$scope.Refined.Fertilizer, $scope.Refined.Polytextiles]},
        Neocoms: { Name: "Neocoms", Active: true,
        Refined: [$scope.Refined.Biocells, $scope.Refined.SilicateGlass]},
        NuclearReactors: { Name: "Nuclear Reactors", Active: true,
        Refined: [$scope.Refined.EnrichedUranium, $scope.Refined.MicrofiberShielding]},
        PlanetaryVehicles: { Name: "Planetary Vehicles", Active: true,
        Refined: [$scope.Refined.MechanicalParts, $scope.Refined.MiniatureElectronics, $scope.Refined.SupertensilePlastics]},
        Robotics: { Name: "Robotics", Active: true,
        Refined: [$scope.Refined.ConsumerElectronics, $scope.Refined.MechanicalParts]},
        SmartfabUnits: { Name: "Smartfab Units", Active: true,
        Refined: [$scope.Refined.ConstructionBlocks, $scope.Refined.MiniatureElectronics]},
        Supercomputers: { Name: "Supercomputers", Active: true,
        Refined: [$scope.Refined.ConsumerElectronics, $scope.Refined.Coolant, $scope.Refined.WaterCooledCPU]},
        SyntheticSynapses: { Name: "Synthetic Synapses", Active: true,
        Refined: [$scope.Refined.SupertensilePlastics, $scope.Refined.TestCultures]},
        TranscranialMicrocontrollers: { Name: "Transcranial Microcontrollers", Active: true,
        Refined: [$scope.Refined.Biocells, $scope.Refined.Nanites]},
        UkomiSuperConductors: { Name: "Ukomi Super Conductors", Active: true,
        Refined: [$scope.Refined.Superconductors, $scope.Refined.SyntheticOil]},
        Vaccines: { Name: "Vaccines", Active: true,
        Refined: [$scope.Refined.Livestock, $scope.Refined.ViralAgent]},
    };

    $scope.AdvancedKeys = [];
    $scope.Advanced = {

        BroadcastNode: { Name: "Broadcast Node", Active: true,
    Specialized: [$scope.Specialized.DataChips, $scope.Specialized.HighTechTransmitters, $scope.Specialized.Neocoms], Resources: []},
        IntegrityResponseDrones: { Name: "Integrity Response Drones", Active: true,
    Specialized: [$scope.Specialized.GelMatrixBiopaste, $scope.Specialized.HazmatDetectionSystems, $scope.Specialized.PlanetaryVehicles], Resources: []},
        NanoFactory: { Name: "Nano-Factory", Active: true,
    Specialized: [$scope.Specialized.IndustrialExplosives, $scope.Specialized.UkomiSuperConductors], Resources: [$scope.Resources.BaseMetals]},
        OrganicMortarApplicators: { Name: "Organic Mortar Applicators", Active: true,
    Specialized: [$scope.Specialized.Condensates, $scope.Specialized.Robotics], Resources: [$scope.Resources.MicroOrganisms]},
        RecursiveComputingModule: { Name: "Recursive Computing Module", Active: true,
    Specialized: [$scope.Specialized.GuidanceSystems, $scope.Specialized.SyntheticSynapses, $scope.Specialized.TranscranialMicrocontrollers], Resources: []},
        SelfHarmonizingPowerCore: { Name: "Self-Harmonizing Power Core", Active: true,
    Specialized: [$scope.Specialized.CameraDrones, $scope.Specialized.HermeticMembranes, $scope.Specialized.NuclearReactors], Resources: []},
        SterileConduits: { Name: "Sterile Conduits", Active: true,
    Specialized: [$scope.Specialized.SmartfabUnits, $scope.Specialized.Vaccines], Resources: [$scope.Resources.AqueousLiquids]},
        WetwareMainframe: { Name: "Wetware Mainframe", Active: true,
    Specialized: [$scope.Specialized.BiotechResearchReports, $scope.Specialized.CryoprotectantSolution, $scope.Specialized.Supercomputers], Resources: []}
    };

    $scope.Planets = [
        {Name: "Barren", Selected: true,
        Resources: [$scope.Resources.MicroOrganisms, $scope.Resources.CarbonCompounds, $scope.Resources.NobleMetals, $scope.Resources.BaseMetals, $scope.Resources.AqueousLiquids]},
        {Name: "Gas", Selected: true,
        Resources: [$scope.Resources.IonicSolutions, $scope.Resources.ReactiveGas, $scope.Resources.NobleGas, $scope.Resources.BaseMetals, $scope.Resources.AqueousLiquids]},
        {Name: "Ice", Selected: true,
        Resources: [$scope.Resources.AqueousLiquids, $scope.Resources.HeavyMetals, $scope.Resources.MicroOrganisms, $scope.Resources.NobleGas, $scope.Resources.PlankticColonies]},
        {Name: "Lava", Selected: true,
        Resources: [$scope.Resources.BaseMetals, $scope.Resources.FelsicMagma, $scope.Resources.HeavyMetals, $scope.Resources.NonCSCrystals, $scope.Resources.SuspendedPlasma]},
        {Name: "Oceanic", Selected: true,
        Resources: [$scope.Resources.AqueousLiquids, $scope.Resources.CarbonCompounds, $scope.Resources.ComplexOrganisms, $scope.Resources.MicroOrganisms, $scope.Resources.PlankticColonies]},
        {Name: "Plasma", Selected: true,
        Resources: [$scope.Resources.BaseMetals, $scope.Resources.HeavyMetals, $scope.Resources.NobleMetals, $scope.Resources.NonCSCrystals, $scope.Resources.SuspendedPlasma]},
        {Name: "Storm", Selected: true,
        Resources: [$scope.Resources.AqueousLiquids, $scope.Resources.BaseMetals, $scope.Resources.IonicSolutions, $scope.Resources.NobleGas, $scope.Resources.SuspendedPlasma]},
        {Name: "Temperate", Selected: true,
        Resources: [$scope.Resources.AqueousLiquids, $scope.Resources.Autotrophs, $scope.Resources.CarbonCompounds, $scope.Resources.ComplexOrganisms, $scope.Resources.MicroOrganisms]}
    ]

    $scope.Recalculate = function() {

        for(var i=0; i<$scope.ResourceKeys.length; ++i)
        {
            $scope.Resources[$scope.ResourceKeys[i]].Active = false;
        }
        for(var i=0; i<$scope.RefinedKeys.length; ++i)
        {
            $scope.Refined[$scope.RefinedKeys[i]].Active = false;
        }

        $scope.RecalculateResources();
        $scope.RecalculateRefined();
        $scope.RecalculateSpecialized();
        $scope.RecalculateAdvanced();
    };
    
    $scope.RecalculateResources = function() {

        for(var i=0; i<$scope.Planets.length; ++i)
        {
            if(!$scope.Planets[i].Selected)
                continue;

            for(var j=0; j<$scope.Planets[i].Resources.length; ++j)
            {
                if(!$scope.Planets[i].Resources[j].Active) 
                {
                    $scope.Planets[i].Resources[j].Active = true;
                }
                
            }
        }
                    
    };

    $scope.RecalculateRefined = function() {
        for(var i=0; i<$scope.RefinedKeys.length; ++i){

            let active = true;
            for( var j=0; j<$scope.Refined[$scope.RefinedKeys[i]].Resources.length; ++j){
                if(!$scope.Refined[$scope.RefinedKeys[i]].Resources[j].Active)
                {
                    active = false;
                    break;
                }
            }

            $scope.Refined[$scope.RefinedKeys[i]].Active = active;
        }
    }

    $scope.RecalculateSpecialized = function() {
        for(var i=0; i<$scope.SpecializedKeys.length; ++i){
            let active = true;
            for( var j=0; j<$scope.Specialized[$scope.SpecializedKeys[i]].Refined.length; ++j){
                if(!$scope.Specialized[$scope.SpecializedKeys[i]].Refined[j].Active)
                {
                    active = false;
                    break;
                }
            }

            $scope.Specialized[$scope.SpecializedKeys[i]].Active = active;
        }
    }

    $scope.RecalculateAdvanced = function() {
        for(var i=0; i<$scope.AdvancedKeys.length; ++i){

            let active = true;
            for( var j=0; j<$scope.Advanced[$scope.AdvancedKeys[i]].Specialized.length; ++j){
                if(!$scope.Advanced[$scope.AdvancedKeys[i]].Specialized[j].Active)
                {
                    active = false;
                    break;
                }
            }
            for( var j=0; j<$scope.Advanced[$scope.AdvancedKeys[i]].Resources.length; ++j){
                if(!$scope.Advanced[$scope.AdvancedKeys[i]].Resources[j].Active)
                {
                    active = false;
                    break;
                }
            }

            $scope.Advanced[$scope.AdvancedKeys[i]].Active = active;
        }
    }

    $scope.ResourceKeys = Object.keys($scope.Resources);
    $scope.RefinedKeys = Object.keys($scope.Refined);
    $scope.SpecializedKeys = Object.keys($scope.Specialized);
    $scope.AdvancedKeys = Object.keys($scope.Advanced);
    $scope.Recalculate();
});