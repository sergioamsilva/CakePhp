/* global c3, console, moment */
/* jshint strict: true, browser:true, jquery: true */

$(document).ready(function () {
    
    'use strict';
    
/*----------------------------------------------------------------------------------------------------
    CONFIGURATIONS
-----------------------------------------------------------------------------------------------------*/
    
    var colors = [
            '#3399CC',
            '#F0B21D',
            '#9C27B0',
            '#00C853',
            '#795548',
            '#D32F2F',
            '#757575',
            '#388E3C',
            '#E65100',
            '#546E7A',
            '#3F51B5',
            '#0288D1'
        ],
        innerHeight = 400,
        innerRotation = false,
        c3AreaGraphChart = null,
        c3DonutGraphChart = null,
        eclisCount = $('h2#eclisCount'),
        courtsCount = $('h2#courtsCount'),
        appealsCount = $('h2#appealsCount'),
        courtsSelector = $('select#filter-courts'),
        daByYearIntervals = [0, 10, 20, 30, 40, 50, 60];
    
/*----------------------------------------------------------------------------------------------------
    FUNCTIONS
-----------------------------------------------------------------------------------------------------*/
    
    var formatDonutData = function (data) {
        
        var donutDataSeries = [];
        
        data.forEach(function (element) {
            
            var donutItem = [
                element.label, 
                element.total
            ];
            
            donutDataSeries.push(donutItem);
            
        });
        
        return donutDataSeries;
    };
    
    var getCategories = function (data) {
        
        var categories = [];
        
        data.forEach(function (element) {
            categories.push(element.label);
        });
        
        return categories;
    };
    
    var getGraphData = function (data, title) {
        
        var graphData = [title];
        
        data.forEach(function (element) {
            graphData.push(element.total);
        });
        
        return graphData;
        
    };

    // Acórdãos por ano
    var drawDAByYearGraph = function (data) {
        
        var title = 'Acórdãos por Ano';

        c3AreaGraphChart = c3.generate({
            
            padding: {
               left: 42,
               right: 20,
               bottom: 35
            },
            
            transition: {
                duration: 250
            },
            
            grid: {
                y: {
                    show: true
                }
            },
            
            color: { 
                pattern: colors 
            },
            
            bindto: 'div#daByYear',
            
            size: {
                height: innerHeight
            },

            bar: {
                width: { ratio: 0.9 }
            },
            
            axis: {
                rotated: innerRotation,
                x: {
                    tick: {
                        values: daByYearIntervals
                    },
                    type: 'category',
                    categories: getCategories(data)
                }
            },
            
            data: {
                
                type: 'area',
                
                columns: [getGraphData(data, title)]
                
            }

        });

    };
    
    // Acórdãos por ano
    var drawDecisionsTypeGraph = function (data) {
        
        var title = 'Tipos de Decisões';

        c3AreaGraphChart = c3.generate({
            
            padding: {
               left: 42,
               right: 10,
               bottom: 35
            },
            
            transition: {
                duration: 250
            },
            
            grid: {
                y: {
                    show: true
                }
            },
            
            color: { 
                pattern: colors 
            },

            size: {
                height: innerHeight
            },

            bar: {
                width: { ratio: 0.8 }
            },
            
            bindto: 'div#decisionsType',

            axis: {
                rotated: innerRotation,
                x: {
                    tick: {
                        width: 80
                    },
                    type: 'category',
                    categories: getCategories(data)
                }
            },
            
            data: {
                
                type: 'bar',
                
                columns: [getGraphData(data, title)]
                
            }

        });

    };
    
    // Acórdãos por ano
    var drawResultsByCourtsGraph = function (data) {

        c3DonutGraphChart = c3.generate({
            
            padding: {
               right: 0,
               bottom: 35
            },
            
            size: { 
                height: 400 
            },
            
            transition: {
                duration: 250
            },
            
            color: { 
                pattern: colors 
            },

            bindto: 'div#resultsByCourts',
            
            data: {
                
                type : 'donut',
                
                columns: formatDonutData(data)
            }

        });

    };
    
    var startNumberAnimations = function () {
        
        $('h2.animateNumber').each(function () {
        
            var params = { number: $(this).attr('data-num') };

            $(this).addClass('active').animateNumber(params, 10000);

        });
        
    };
    
    var generateCourtsList = function (courts) {
        
        courtsSelector.empty().select2({ 
            data: courts,
            width: '100%', 
            allowClear: true, placeholder: 'Selecione um Tribunal'
        });
        
    };

    var getStatsData = function () {
        
        $.ajax({
        
            type: 'GET',

            url: '/stats',

            dataType: 'json',

            success: function (data) {
                
                var years = data.DAByYear,
                    allCourts = data.allCourts,
                    eclisCountVal = data.eclisCount,
                    courts = data.resultsByCourts,
                    courtsCountVal = data.courtsCount,
                    appealsCountVal = data.appealsCount,
                    decisions = data.resultsByDecisions,
                    created = (new Date()).toISOString();
                
                drawDAByYearGraph(years);
                drawResultsByCourtsGraph(courts);
                drawDecisionsTypeGraph(decisions);
                
                generateCourtsList(allCourts);
                
                eclisCount.attr('data-num', eclisCountVal);
                courtsCount.attr('data-num', courtsCountVal);
                appealsCount.attr('data-num', appealsCountVal);
                
                localStorage.setItem('created', created);
                
                localStorage.setItem('eclisCountVal', eclisCountVal);
                localStorage.setItem('courtsCountVal', courtsCountVal);
                localStorage.setItem('appealsCountVal', appealsCountVal);
                localStorage.setItem('allCourts', JSON.stringify(allCourts));
                
                localStorage.setItem('years', JSON.stringify(years));
                localStorage.setItem('courts', JSON.stringify(courts));
                localStorage.setItem('decisions', JSON.stringify(decisions));

                startNumberAnimations();

            }

        });
        
    };

    var handleGraphicsData = function () {
        
        var created = localStorage.getItem('created'),
            difference = moment().diff(created, 'hours');

        if((created === null) || (parseInt(difference, 10) >= 12)) {
            
            getStatsData();
            
        } else {
            
            generateCourtsList(JSON.parse(localStorage.getItem('allCourts')));
            
            eclisCount.attr('data-num', localStorage.getItem('eclisCountVal'));
            courtsCount.attr('data-num', localStorage.getItem('courtsCountVal'));
            appealsCount.attr('data-num', localStorage.getItem('appealsCountVal'));
            
            drawDAByYearGraph(JSON.parse(localStorage.getItem('years')));
            drawResultsByCourtsGraph(JSON.parse(localStorage.getItem('courts')));
            drawDecisionsTypeGraph(JSON.parse(localStorage.getItem('decisions')));
            
            startNumberAnimations();
        }

    };
    
/*----------------------------------------------------------------------------------------------------
    EVENTS AND TRANSFORMATIONS
-----------------------------------------------------------------------------------------------------*/
    
    handleGraphicsData();
    
/*----------------------------------------------------------------------------------------------------
    SCRIPT ENDING
-----------------------------------------------------------------------------------------------------*/
    
});