import numpy as np
import pandas as pd
from flask import Flask, request, json, jsonify, render_template, make_response
## Numpy_json
from json_tricks import dump, dumps, load, loads, strip_comments

from joblib import load
import pso_input_flask as pso
import matplotlib.pyplot as plt

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    params = request.get_json()['arr']
    print(params)
    num_const = int(params[0])
    const = params[1]
    min_obj = params[2]
    bounds = params[3]
    #bounds = np.array(params[3]).astype(int)
    nop = params[4]
    iters = params[5]
    # print('predict called')
    # r = (request.data).decode("utf-8")
    # r = f'{r}'
    # print(r)
    res = pso.main_prog(num_const, const, min_obj, bounds, nop, iters)
    
    return jsonify(dumps(res))
    #return ""
if __name__ == "__main__":
    app.run(debug=True)