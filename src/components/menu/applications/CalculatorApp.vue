<script setup>
import { ref } from "vue";

const displayVal = ref("0");
const numBtnPress = ref(true);
const storedValue = ref(null);
const storedOperator = ref(null);
const lastAction = ref(null);
const isNewNumber = ref(false);

function addToDisplay(num) {
    console.log(
        "addToDisplay вызван с num: ",
        num,
        "isNewNumber:",
        isNewNumber.value,
    );

    if (isNewNumber.value || displayVal.value === "0") {
        displayVal.value = num.toString();
        isNewNumber.value = false;
    } else {
        displayVal.value += num;
    }

    numBtnPress.value = true;
    lastAction.value = "digit";
    console.log("Результат на дисплее: ", displayVal.value);
}

function operationPress(operator) {
    console.log(
        "operationPress вызван с оператором: ",
        operator,
        "текущее значение ",
        displayVal.value,
    );

    if (
        storedValue.value !== null &&
        storedOperator.value &&
        lastAction.value === "digit"
    ) {
        const result = calculate(
            storedValue.value,
            parseFloat(displayVal.value),
            storedOperator.value,
        );
        displayVal.value = result.toString();
        storedValue.value = result;
    } else {
        storedValue.value = parseFloat(displayVal.value);
    }

    storedOperator.value = operator;

    isNewNumber.value = true;
    numBtnPress.value = false;
    lastAction.value = "operator";
    console.log(
        "Сохранено: число ",
        storedValue.value,
        "оператор = ",
        storedOperator.value,
    );
}

function handleEquals() {
    console.log("Равно нажато");
    if (storedValue.value !== null && storedOperator.value) {
        const secondNum = parseFloat(displayVal.value);
        const result = calculate(
            storedValue.value,
            secondNum,
            storedOperator.value,
        );

        displayVal.value = result.toString();
        storedValue.value = null;
        storedOperator.value = null;
        isNewNumber.value = true;
        lastAction.value = "equals";
        console.log("Результат: ", result);
    }
}

function calculate(firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "×":
            return firstNum * secondNum;
        case "÷":
            return secondNum !== 0 ? firstNum / secondNum : "Error";
        case "%":
            return firstNum * (secondNum / 100);
        default:
            return secondNum;
    }
}

const handleClear = () => {
    displayVal.value = "0";
    storedValue.value = null;
    storedOperator.value = null;
    numBtnPress.value = true;
    lastAction.value = null;
    isNewNumber.value = false;
    console.log("Очищено.");
};
</script>

<template>
    <div
        class="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen flex items-center justify-center p-4"
    >
        <div class="max-w-xs w-full mx-auto">
            <div
                class="bg-white rounded-2xl p-6 shadow-2xl shadow-gray-300/50 border border-gray-100"
            >
                <div class="mb-6">
                    <div
                        class="bg-gray-50 rounded-xl p-4 text-right border border-gray-200"
                    >
                        <div
                            class="text-gray-400 text-sm min-h-5 mb-1 overflow-hidden"
                        >
                            <!-- Показываем предыдущее выражение -->
                            <span v-if="storedValue !== null && storedOperator">
                                {{ storedValue }} {{ storedOperator }}
                            </span>
                        </div>
                        <div
                            class="text-3xl font-bold text-gray-800 overflow-x-auto whitespace-nowrap"
                        >
                            {{ displayVal }}
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-4 gap-3">
                    <!-- Первый ряд -->
                    <button
                        @click="handleClear"
                        class="h-16 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        C
                    </button>
                    <button
                        class="h-16 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        ( )
                    </button>
                    <button
                        @click="operationPress('%')"
                        class="h-16 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        %
                    </button>
                    <button
                        @click="operationPress('÷')"
                        class="h-16 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold transition-all active:scale-95"
                    >
                        ÷
                    </button>

                    <!-- Второй ряд -->
                    <button
                        @click="addToDisplay('7')"
                        class="h-16 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        7
                    </button>
                    <button
                        @click="addToDisplay('8')"
                        class="h-16 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        8
                    </button>
                    <button
                        @click="addToDisplay('9')"
                        class="h-16 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        9
                    </button>
                    <button
                        @click="operationPress('×')"
                        class="h-16 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold transition-all active:scale-95"
                    >
                        ×
                    </button>

                    <!-- Третий ряд -->
                    <button
                        @click="addToDisplay('4')"
                        class="h-16 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        4
                    </button>
                    <button
                        @click="addToDisplay('5')"
                        class="h-16 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        5
                    </button>
                    <button
                        @click="addToDisplay('6')"
                        class="h-16 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        6
                    </button>
                    <button
                        @click="operationPress('-')"
                        class="h-16 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold transition-all active:scale-95"
                    >
                        -
                    </button>

                    <!-- Четвертый ряд -->
                    <button
                        @click="addToDisplay('1')"
                        class="h-16 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        1
                    </button>
                    <button
                        @click="addToDisplay('2')"
                        class="h-16 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        2
                    </button>
                    <button
                        @click="addToDisplay('3')"
                        class="h-16 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        3
                    </button>
                    <button
                        @click="operationPress('+')"
                        class="h-16 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold transition-all active:scale-95"
                    >
                        +
                    </button>

                    <!-- Пятый ряд -->
                    <button
                        @click="addToDisplay('.')"
                        class="h-16 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        .
                    </button>
                    <button
                        @click="addToDisplay('0')"
                        class="h-16 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        0
                    </button>
                    <button
                        @click="handleClear"
                        class="h-16 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xl font-bold transition-all active:scale-95"
                    >
                        ⌫
                    </button>
                    <button
                        @click="handleEquals"
                        class="h-16 rounded-xl bg-green-500 hover:bg-green-600 text-white text-2xl font-bold transition-all active:scale-95"
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
