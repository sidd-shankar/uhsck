from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import pyorient
import json
import re

def index(request):
    # return HttpResponse("Hello, world.")
    return render(request, 'iq/index.html')

def graphData(request,query):
    client = pyorient.OrientDB("localhost", 2424)
    session_id = client.connect("root", "rootpwd")
    #client.db_create("testdb", pyorient.DB_TYPE_GRAPH, pyorient.STORAGE_TYPE_MEMORY)
    client.db_open("testdb", "root", "rootpwd")

    modified_query = query.split("where",1)[0] + " where "
    result = find_between(query, "where", "=")
    results = result.split(".")

    for i in range(len(results)):
        if(i!=0 and i!= len(results)-1):
            modified_query = modified_query + "out(" + results[i-1]+"_"+results[i]+")."
        if(i == len(results)-1):
            modified_query = modified_query + results[i]

    modified_query = modified_query + " = " + query.split("=",1)[1]
    print(modified_query)
    response = client.command(modified_query)
    output = []
    for res in response:
       print(res.oRecordData)
    return JsonResponse(output, safe=False)

def options(request,pq):
    client = pyorient.OrientDB("localhost", 2424)
    session_id = client.connect("root", "rootpwd")
    # client.db_create("testdb", pyorient.DB_TYPE_GRAPH, pyorient.STORAGE_TYPE_MEMORY)
    client.db_open("testdb", "root", "rootpwd")
    return JsonResponse(pq, safe=False)

def find_between( s, first, last ):
    try:
        start = s.index( first ) + len( first )
        end = s.index( last, start )
        return s[start:end]
    except ValueError:
        return ""
