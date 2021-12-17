void main() {
  List<int> calls = [
    17,
    11,
    37,
    7,
    89,
    48,
    99,
    28,
    56,
    55,
    57,
    27,
    83,
    59,
    53,
    72,
    6,
    87,
    33,
    82,
    13,
    23,
    35,
    40,
    71,
    47,
    78,
    2,
    39,
    4,
    51,
    1,
    67,
    31,
    79,
    69,
    15,
    73,
    80,
    22,
    92,
    95,
    91,
    43,
    26,
    97,
    36,
    34,
    12,
    96,
    86,
    52,
    66,
    94,
    61,
    76,
    64,
    77,
    85,
    98,
    42,
    68,
    84,
    63,
    60,
    30,
    65,
    19,
    54,
    58,
    24,
    20,
    25,
    75,
    93,
    16,
    18,
    44,
    14,
    88,
    45,
    10,
    9,
    3,
    70,
    74,
    81,
    90,
    46,
    38,
    21,
    49,
    29,
    50,
    0,
    5,
    8,
    32,
    62,
    41,
  ];

  final board = [
    16,
    62,
    3,
    75,
    84,
    54,
    10,
    1,
    2,
    44,
    21,
    42,
    0,
    99,
    64,
    91,
    45,
    67,
    34,
    82,
    83,
    78,
    17,
    53,
    6
  ];

  calculateBoard(List board, int call) {}

  checkIfCallWon(List board, int call) {}

  callLoop(List board) {
    for (var i = 0; i < calls.length; i++) {
      final call = calls[i];
      final winner = checkIfCallWon(board, call);
      if (winner) {
        return calculateBoard(winner, call);
      }
    }
  }

  // callLoop(board);

  Test value1 = Test(name: "drew", lastName: "osmond");
  TestTwo value2 = TestTwo("drew", "osmond");
  print(value1.name);
  print(value2.name);
}

class Test {
  String name;
  String lastName;

  Test({required this.name, required this.lastName});
}

class TestTwo {
  String name;
  String lastName;

  TestTwo(this.name, this.lastName);
}

// [
//   [ '16', '62', '3', '75', '84' ],
//   [ '54', '10', '1', '2', '44' ],
//   [ '21', '42', '0', true, '64' ],
//   [ '91', '45', '67', '34', true ],
//   [ true, true, true, true, true ]
// ]
// 78
// 55770