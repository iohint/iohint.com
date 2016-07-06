new Highcharts.Chart({
  chart: {
    renderTo: 'post-test-chart',
    // type: 'scatter',
    zoomType: 'xy'
  },
  plotOptions: {
    // line: {
    //   lineWidth: 0,
    // },
  },
  title: {
    text: 'HTTP Service Request Rate',
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Requests per minute',
    },
  },
  // tooltip: {
  //     headerFormat: '<b>{series.name}</b><br>',
  //     pointFormat: '{point.x} cm, {point.y} kg'
  // },
  series: [
    {
      name: 'Actual Request Rate',
      type: 'line',
      data: [
        [1466985600000, 299],
        [1466989200000, 301],
        [1466992800000, 341],
        [1466996400000, 293],
        [1467000000000, 287],
        [1467003600000, 513],
        [1467007200000, 251],
        [1467010800000, 368],
        [1467014400000, 235],
        [1467018000000, 461],
        [1467021600000, 828],
        [1467025200000, 1123],
        [1467028800000, 2430],
        [1467032400000, 3217],
        [1467036000000, 3038],
        [1467039600000, 2415],
        [1467043200000, 2294],
        [1467046800000, 1903],
        [1467050400000, 2215],
        [1467054000000, 2192],
        [1467057600000, 1927],
        [1467061200000, 1466],
        [1467064800000, 1089],
        [1467068400000, 800],
        [1467072000000, 569],
        [1467075600000, 451],
        [1467079200000, 476],
        [1467082800000, 247],
        [1467086400000, 358],
        [1467090000000, 511],
        [1467093600000, 247],
        [1467097200000, 485],
        [1467100800000, 479],
        [1467104400000, 409],
        [1467108000000, 730],
        [1467111600000, 770],
        [1467115200000, 1487],
        [1467118800000, 2235],
        [1467122400000, 2166],
        [1467126000000, 1903],
        [1467129600000, 2016],
        [1467133200000, 2094],
        [1467136800000, 1852],
        [1467140400000, 1667],
        [1467144000000, 1946],
        [1467147600000, 1405],
        [1467151200000, 929],
        [1467154800000, 702],
        [1467158400000, 613],
        [1467162000000, 522],
        [1467165600000, 484],
        [1467169200000, 265],
        [1467172800000, 306],
        [1467176400000, 519],
        [1467180000000, 237],
        [1467183600000, 643],
        [1467187200000, 445],
        [1467190800000, 534],
        [1467194400000, 890],
        [1467198000000, 884],
        [1467201600000, 1601],
        [1467205200000, 2080],
        [1467208800000, 1938],
        [1467212400000, 1965],
        [1467216000000, 2081],
        [1467219600000, 1625],
        [1467223200000, 1708],
        [1467226800000, 1662],
        [1467230400000, 1888],
        [1467234000000, 1395],
        [1467237600000, 906],
        [1467241200000, 678],
        [1467244800000, 530],
        [1467248400000, 483],
        [1467252000000, 520],
        [1467255600000, 272],
        [1467259200000, 289],
        [1467262800000, 545],
        [1467266400000, 204],
        [1467270000000, 426],
        [1467273600000, 189],
        [1467277200000, 486],
        [1467280800000, 692],
        [1467284400000, 931],
        [1467288000000, 1653],
        [1467291600000, 2131],
        [1467295200000, 2273],
        [1467298800000, 2693],
        [1467302400000, 2461],
        [1467306000000, 2689],
        [1467309600000, 2575],
        [1467313200000, 3308],
        [1467316800000, 3555],
        [1467320400000, 2492],
        [1467324000000, 1500],
        [1467327600000, 1157],
        [1467331200000, 890],
        [1467334800000, 709],
        [1467338400000, 732],
        [1467342000000, 529],
        [1467345600000, 712],
        [1467349200000, 992],
        [1467352800000, 423],
        [1467356400000, 524],
        [1467360000000, 260],
        [1467363600000, 549],
        [1467367200000, 1001],
        [1467370800000, 1004],
        [1467374400000, 2314],
        [1467378000000, 3241],
        [1467381600000, 3209],
        [1467385200000, 3863],
        [1467388800000, 2985],
        [1467392400000, 2021],
        [1467396000000, 1907],
        [1467399600000, 1906],
        [1467403200000, 1461],
        [1467406800000, 1389],
        [1467410400000, 702],
        [1467414000000, 534],
        [1467417600000, 417],
        [1467421200000, 340],
        [1467424800000, 426],
        [1467428400000, 218],
        [1467432000000, 369],
        [1467435600000, 303],
        [1467439200000, 315],
        [1467442800000, 399],
        [1467446400000, 132],
        [1467450000000, 406],
        [1467453600000, 630],
        [1467457200000, 379],
        [1467460800000, 475],
        [1467464400000, 493],
        [1467468000000, 531],
        [1467471600000, 487],
        [1467475200000, 831],
        [1467478800000, 469],
        [1467482400000, 418],
        [1467486000000, 430],
        [1467489600000, 408],
        [1467493200000, 308],
        [1467496800000, 234],
        [1467500400000, 152],
        [1467504000000, 193],
        [1467507600000, 155],
        [1467511200000, 288],
        [1467514800000, 163],
        [1467518400000, 180],
        [1467522000000, 127],
        [1467525600000, 178],
        [1467529200000, 199],
        [1467532800000, 124],
        [1467536400000, 337],
        [1467540000000, 573],
        [1467543600000, 386],
        [1467547200000, 422],
        [1467550800000, 418],
        [1467554400000, 444],
        [1467558000000, 589],
        [1467561600000, 718],
        [1467565200000, 375],
        [1467568800000, 419],
        [1467572400000, 452],
        [1467576000000, 389],
        [1467579600000, 320],
        [1467583200000, 196],
        [1467586800000, 185],
        [1467590400000, 10],
      ]
    }
  ],
});
