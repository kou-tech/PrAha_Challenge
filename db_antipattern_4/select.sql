-- 課題1
-- 親レコードに対して結合を繰り返す必要があり、階層が深くなってくると複雑かつ、柔軟に取得することが厳しくなることが想定される
Select 
m1.* ,
m2.*
From Message m1
LEFT OUTER JOIN Message m2
ON m1.id = m2.parent_message_id
WHERE m1.id = 1;

