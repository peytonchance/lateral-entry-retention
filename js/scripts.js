var chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', 'UNC System Graduate', 'NC Private University Graduate', 'Lateral Entry', 'Out of State', 'Teach For America',],
            ['3-year', 0.8528, 0.8299, 0.6454, 0.6610, 0.2435],
            ['5-year', 0.7219, 0.6929, 0.4781, 0.4819, 0.0725]
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category'
        },
        y: {
            tick:{
                format: d3.format('%')
            }
        }
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    }
});
