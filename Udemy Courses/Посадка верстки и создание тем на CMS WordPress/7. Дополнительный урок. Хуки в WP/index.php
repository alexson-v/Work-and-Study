<?php
    function print_hello($text, $name) { // Вызываем хук-событие
        echo 'Hello world' . $text . ' ' . $name;
    };

    add_action('my_hook', 'print_hello', 10, 2);

    do_action('my_hook', 'dear customer', 'Ivan');


    function my_filter_function($str) { // Вызываем хук-фильтр
        return 'Hello ' . $str;
    };

    add_filter('my_filter', 'my_filter_function', 15);

    echo apply_filters('my_filter', 'World');

    remove_filter('my_filter', 'my_filter_function', 15);
?>