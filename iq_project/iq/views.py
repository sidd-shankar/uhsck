from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import pyorient
import json

def index(request):
    # return HttpResponse("Hello, world.")
    return render(request, 'iq/index.html')

def graphData(request):
    client = pyorient.OrientDB("localhost", 2424)
    session_id = client.connect("root", "rootpwd")
    #client.db_create("testdb", pyorient.DB_TYPE_GRAPH, pyorient.STORAGE_TYPE_MEMORY)
    client.db_open("testdb", "root", "rootpwd")
    response = client.command("select * from my_class where name='mayank'")
    for res in response:
        print(type(res.oRecordData))

    data = {
        'name': 'Vitor',
        'location': 'Finland',
        'is_active': True,
        'count': 28
    }
    print(request.method)
    print(request.body)
    return JsonResponse(res.oRecordData,safe=False)

def options(request):
    # client = pyorient.OrientDB("localhost", 2424)
    # session_id = client.connect("root", "rootpwd")
    # # client.db_create("testdb", pyorient.DB_TYPE_GRAPH, pyorient.STORAGE_TYPE_MEMORY)
    # client.db_open("testdb", "root", "rootpwd")
    # # cluster_id = client.command("create class my_class extends V")
    # # cluster_id = client.command("create property my_class.id Integer")
    # # cluster_id = client.command("create property my_class.name String")
    # # client.command("insert into my_class ( 'id','’name' ) values( 1201, 'satish')")
    data = {

    }
    return JsonResponse(data)