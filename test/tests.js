QUnit.test( "General requeriment", function( assert ) {
  assert.ok( setup(5, '1 2 N', ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']) === '1 3 N', "General requeriment - Passed!" );
});
