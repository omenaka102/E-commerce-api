[
    {
      $match:
        /**
         * query: The query in MQL.
         */
        {
          product: ObjectId(
            "64300b1399ccf2efab591bdf"
          ),
        },
    },
    {
      $group:
        /**
         * _id: The id of the group.
         * fieldN: The first field name.
         */
        {
          _id: null,
          averageRating: {
            $avg: "$rating",
          },
          numOfReviews: {
            $sum: 1,
          },
        },
    },
  ]