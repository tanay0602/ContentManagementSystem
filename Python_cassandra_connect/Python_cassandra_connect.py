from cassandra.cluster import Cluster

cluster =  Cluster()
cluster = Cluster(['127.0.0.1'], port = 9042)
session = cluster.connect("university")

rows = session.execute('Select * from student;')


def update_fee_25k():
    query = "update Student set fees = 250000.00 where stud_id = %s;"
    for row in rows:
        if(row.cgpa>8.0):
             session.execute(query, [row.stud_id])


def update_fee_0():
    
    top_cgpa = 0.0
    top_id = "20BCI7002"
    for row in rows:
        if(top_cgpa < row.cgpa):
           top_cgpa = row.cgpa
           top_id = row.stud_id

    query = "update Student set fees = 0.0 where stud_id = %s;"
    session.execute(query, [top_id])


def avg_cgpa():
    sum_cgpa = 0;
    count = 0;
    for row in rows:
        if(row.stud_dept == "MIS"):
            sum_cgpa = sum_cgpa + row.cgpa
            count = count+1;
    print("|       AVG(CGPA)   |")
    print("+-------------------+")
    print("|",(sum_cgpa/count),"|")



update_fee_0()
update_fee_25k()
avg_cgpa()
