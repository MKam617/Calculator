//Вгоняем значения в переменные
var numbers = document.querySelectorAll('.number'),
   operation_btns = document.querySelectorAll('.operation_btn'),
   clear_btns = document.querySelectorAll('.clear_btn'),
   decimate_point = document.getElementById('decimate_btn'),
   result_btn = document.getElementById('result'),
   display = document.getElementById('display'),
   Current_number = 0,
   New_number = false,
   result = 0,
   Wait_operation = '';

//Функция для того,что ниже
function number_press(symbol){
   if(display.value === '0'){;
      display.value = symbol;
   } else {;
      display.value += symbol;
   };
};
function clear(id){
   if(id === 'c'){
      display.value = '0';
   } else if(id === 'back'){
      display.value = display.value.slice(0, display.value.length -= 1);
   };
};
function operation(op){
   if (op === '+'){  
      Current_number = display.value;
      display.value = '';
      Wait_operation = op;
   } else if (op === '-'){
      Current_number = display.value;
      display.value = '';
      Wait_operation = op;
   } else if (op === '*'){  
      Current_number = display.value;
      display.value = '';
      Wait_operation = op;
   } else if (op === '/'){  
      Current_number = display.value;
      display.value = '';
      Wait_operation = op;
   } else if (op === '='){
      if (Wait_operation === '+'){
         display.value = parseFloat(display.value) + parseFloat(Current_number);
      } else if (Wait_operation === '-'){
         display.value = parseFloat(Current_number) - parseFloat(display.value);
      } else if (Wait_operation === '*'){
         display.value = parseFloat(Current_number) * parseFloat(display.value);
      } else if (Wait_operation === '/'){
         display.value = parseFloat(Current_number) / parseFloat(display.value);
      };
   };
};
function decimate(symbol){
   var desimalMemory = display.value;
   if (desimalMemory.indexOf(".") === -1){
      if(display.value){
         display.value += symbol;
      } else{
         display.value = "0.";
      };
   };
};

//Вешаем на все кнопки обработчики событий
for (var i=0; i<numbers.length; i++){
   var number_btn = numbers[i];
   number_btn.addEventListener('click', function(e){
      number_press(e.target.textContent);
   })};
for (var i=0; i<operation_btns.length; i++){;
   var operation_btn = operation_btns[i];
   operation_btn.addEventListener('click', function(e){
      operation(e.target.textContent)
   });
};
for (var i=0; i<clear_btns.length; i++){;
   var clear_btn = clear_btns[i];
   clear_btn.addEventListener('click', function(e){
      clear(e.srcElement.id);
   });
};
decimate_btn.addEventListener('click', function(e){
   decimate(e.target.textContent)
});