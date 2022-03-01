<?php

$recepient = "fetfurmoz1@yandex.ru";
$siteName = "HTML-шаблон";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$subject = trim($_POST["subject"]);
$count = trim($_POST["count"]);
$cost = trim($_POST["cost"]);

$message = "Имя: $name \nТелефон: $phone \nПредмет: $subject \nСтоимость: $cost \nКоличество: $count";

echo var_dump($name);

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
