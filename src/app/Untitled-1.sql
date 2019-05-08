

Select *
from Tabe A, tabe B
where SUBSTRING(A.Col,1,3) = 'W10'
and SUBSTRING(A.Col,1,3) = 'W00'
and SUBSTRING(A.Col,4,9) = SUBSTRING(A.Col,4,9)


Select *
from Tabe A, tabe B
WHERE SUBSTRING(A.Col,4,9) = SUBSTRING(B.Col,4,9)
and SUBSTRING(A.Col,4,9)
and A.id in  (
    Select id
    from Tabe A, tabe B
    where SUBSTRING(Col,1,3) = 'W10'
)
and  B.id in  (
    Select id
    from Tabe
    where SUBSTRING(Col,1,3) = 'W00'
)
