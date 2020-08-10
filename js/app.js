new Vue({

      el: '#app',
      data: {
        items: [

          {
            'id': 1,
            'product': 'Mario Kart',
            'cost': 39.99
          },
          {
            'id': 2,
            'product': 'Call of Duty',
            'cost': 129.99
          },
          {
            'id': 3,
            'product': 'PS4',
            'cost': 169.99
          }

        ],
        product: '',
        cost: '',
        lastIndex: 3

      },

      // calculate total cost of all items

      computed: {

        result: function() {

          return Object.values(this.items).reduce((t, {cost}) => t + cost, 0);

        },

      },

      // add and remove items

      methods: {

        deleteItem: function(index) {

          console.log("Removed", index);
          this.items.splice(index, 1);

        },

        addItem: function() {

          console.log("Added");
          this.lastIndex += 1;
          
          this.items.push({
            'id': this.lastIndex,
            'product': this.product,
            'cost': parseFloat(this.cost)
          });
          
          this.product = '';
          this.cost = '';

        }
      } // close methods

    }); // close new Vue

