// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DSVM_METADATA: Metadata = {
    id: "c9d5f8db5e44fe471c2ae707fdea9be43c26edb5.boutiques",
    name: "3dsvm",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dsvmParameters {
    "__STYXTYPE__": "3dsvm";
    "train_vol"?: InputPathType | null | undefined;
    "train_labels"?: InputPathType | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "no_model_mask": boolean;
    "model": string;
    "alpha"?: string | null | undefined;
    "bucket"?: string | null | undefined;
    "type"?: "classification" | "regression" | null | undefined;
    "c_value"?: number | null | undefined;
    "epsilon"?: number | null | undefined;
    "kernel"?: "linear" | "polynomial" | "rbf" | "sigmoid" | null | undefined;
    "d_value"?: number | null | undefined;
    "gamma"?: number | null | undefined;
    "s_value"?: number | null | undefined;
    "r_value"?: number | null | undefined;
    "max_iterations"?: number | null | undefined;
    "wout": boolean;
    "test_vol"?: InputPathType | null | undefined;
    "predictions"?: string | null | undefined;
    "classout": boolean;
    "nopred_censored": boolean;
    "nodetrend": boolean;
    "nopred_scale": boolean;
    "test_labels"?: InputPathType | null | undefined;
    "multiclass"?: "DAG" | "vote" | null | undefined;
    "help": boolean;
    "version": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "3dsvm": v_3dsvm_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "3dsvm": v_3dsvm_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3dsvm(...)`.
 *
 * @interface
 */
interface V3dsvmOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output model file in .1D format.
     */
    out_model: OutputPathType;
    /**
     * Output alphas file in .1D format.
     */
    out_alpha: OutputPathType;
    /**
     * Output bucket file in .1D format.
     */
    out_bucket: OutputPathType;
    /**
     * Output predictions file in .1D format.
     */
    out_predictions: OutputPathType;
}


function v_3dsvm_params(
    model: string,
    train_vol: InputPathType | null = null,
    train_labels: InputPathType | null = null,
    mask: InputPathType | null = null,
    no_model_mask: boolean = false,
    alpha: string | null = null,
    bucket: string | null = null,
    type_: "classification" | "regression" | null = null,
    c_value: number | null = null,
    epsilon: number | null = null,
    kernel: "linear" | "polynomial" | "rbf" | "sigmoid" | null = null,
    d_value: number | null = null,
    gamma: number | null = null,
    s_value: number | null = null,
    r_value: number | null = null,
    max_iterations: number | null = null,
    wout: boolean = false,
    test_vol: InputPathType | null = null,
    predictions: string | null = null,
    classout: boolean = false,
    nopred_censored: boolean = false,
    nodetrend: boolean = false,
    nopred_scale: boolean = false,
    test_labels: InputPathType | null = null,
    multiclass: "DAG" | "vote" | null = null,
    help: boolean = false,
    version: boolean = false,
): V3dsvmParameters {
    /**
     * Build parameters.
    
     * @param model The basename for the model brik containing the SVM model during training or testing.
     * @param train_vol A 3D+t AFNI brik dataset to be used for training.
     * @param train_labels Filename of class category .1D labels corresponding to the stimulus paradigm for the training data set.
     * @param mask Specify a mask dataset to only perform the analysis on non-zero mask voxels.
     * @param no_model_mask Flag to enable the omission of a mask file. Required if '-mask' is not used.
     * @param alpha Write the alphas to a specified .1D file.
     * @param bucket Outputs the sum of weighted linear support vectors written out to a functional (fim) brik file.
     * @param type_ Specify type: classification (default) or regression.
     * @param c_value Control SVM model complexity (C value).
     * @param epsilon Specify epsilon for regression.
     * @param kernel Specify type of kernel function.
     * @param d_value D parameter in polynomial kernel.
     * @param gamma Gamma parameter in rbf kernel.
     * @param s_value S parameter in sigmoid/poly kernel.
     * @param r_value R parameter in sigmoid/poly kernel.
     * @param max_iterations Specify the maximum number of iterations for the optimization. Default is 1 million.
     * @param wout Flag to output sum of weighted linear support vectors to the bucket file.
     * @param test_vol A 3D or 3D+t AFNI brik dataset to be used for testing.
     * @param predictions Basename for .1D prediction files.
     * @param classout Flag to specify that prediction files should be integer-valued, corresponding to class category decisions.
     * @param nopred_censored Do not write predicted values for censored time-points to predictions file.
     * @param nodetrend Flag to specify that prediction files should NOT be linearly detrended.
     * @param nopred_scale Do not scale predictions. Values below 0.0 correspond to (class A) and values above 0.0 to (class B).
     * @param test_labels Filename of 'true' class category .1D labels for the test dataset.
     * @param multiclass Specify the multiclass algorithm for classification.
     * @param help Print help message
     * @param version Print version history
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dsvm" as const,
        "no_model_mask": no_model_mask,
        "model": model,
        "wout": wout,
        "classout": classout,
        "nopred_censored": nopred_censored,
        "nodetrend": nodetrend,
        "nopred_scale": nopred_scale,
        "help": help,
        "version": version,
    };
    if (train_vol !== null) {
        params["train_vol"] = train_vol;
    }
    if (train_labels !== null) {
        params["train_labels"] = train_labels;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (alpha !== null) {
        params["alpha"] = alpha;
    }
    if (bucket !== null) {
        params["bucket"] = bucket;
    }
    if (type_ !== null) {
        params["type"] = type_;
    }
    if (c_value !== null) {
        params["c_value"] = c_value;
    }
    if (epsilon !== null) {
        params["epsilon"] = epsilon;
    }
    if (kernel !== null) {
        params["kernel"] = kernel;
    }
    if (d_value !== null) {
        params["d_value"] = d_value;
    }
    if (gamma !== null) {
        params["gamma"] = gamma;
    }
    if (s_value !== null) {
        params["s_value"] = s_value;
    }
    if (r_value !== null) {
        params["r_value"] = r_value;
    }
    if (max_iterations !== null) {
        params["max_iterations"] = max_iterations;
    }
    if (test_vol !== null) {
        params["test_vol"] = test_vol;
    }
    if (predictions !== null) {
        params["predictions"] = predictions;
    }
    if (test_labels !== null) {
        params["test_labels"] = test_labels;
    }
    if (multiclass !== null) {
        params["multiclass"] = multiclass;
    }
    return params;
}


function v_3dsvm_cargs(
    params: V3dsvmParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dsvm");
    if ((params["train_vol"] ?? null) !== null) {
        cargs.push(
            "-trainvol",
            execution.inputFile((params["train_vol"] ?? null))
        );
    }
    if ((params["train_labels"] ?? null) !== null) {
        cargs.push(
            "-trainlabels",
            execution.inputFile((params["train_labels"] ?? null))
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["no_model_mask"] ?? null)) {
        cargs.push("-nomodelmask");
    }
    cargs.push(
        "-model",
        (params["model"] ?? null)
    );
    if ((params["alpha"] ?? null) !== null) {
        cargs.push(
            "-alpha",
            (params["alpha"] ?? null)
        );
    }
    if ((params["bucket"] ?? null) !== null) {
        cargs.push(
            "-bucket",
            (params["bucket"] ?? null)
        );
    }
    if ((params["type"] ?? null) !== null) {
        cargs.push(
            "-type",
            (params["type"] ?? null)
        );
    }
    if ((params["c_value"] ?? null) !== null) {
        cargs.push(
            "-c",
            String((params["c_value"] ?? null))
        );
    }
    if ((params["epsilon"] ?? null) !== null) {
        cargs.push(
            "-e",
            String((params["epsilon"] ?? null))
        );
    }
    if ((params["kernel"] ?? null) !== null) {
        cargs.push(
            "-kernel",
            (params["kernel"] ?? null)
        );
    }
    if ((params["d_value"] ?? null) !== null) {
        cargs.push(
            "-d",
            String((params["d_value"] ?? null))
        );
    }
    if ((params["gamma"] ?? null) !== null) {
        cargs.push(
            "-g",
            String((params["gamma"] ?? null))
        );
    }
    if ((params["s_value"] ?? null) !== null) {
        cargs.push(
            "-s",
            String((params["s_value"] ?? null))
        );
    }
    if ((params["r_value"] ?? null) !== null) {
        cargs.push(
            "-r",
            String((params["r_value"] ?? null))
        );
    }
    if ((params["max_iterations"] ?? null) !== null) {
        cargs.push(
            "-max_iterations",
            String((params["max_iterations"] ?? null))
        );
    }
    if ((params["wout"] ?? null)) {
        cargs.push("-wout");
    }
    if ((params["test_vol"] ?? null) !== null) {
        cargs.push(
            "-testvol",
            execution.inputFile((params["test_vol"] ?? null))
        );
    }
    if ((params["predictions"] ?? null) !== null) {
        cargs.push(
            "-predictions",
            (params["predictions"] ?? null)
        );
    }
    if ((params["classout"] ?? null)) {
        cargs.push("-classout");
    }
    if ((params["nopred_censored"] ?? null)) {
        cargs.push("-nopredcensored");
    }
    if ((params["nodetrend"] ?? null)) {
        cargs.push("-nodetrend");
    }
    if ((params["nopred_scale"] ?? null)) {
        cargs.push("-nopredscale");
    }
    if ((params["test_labels"] ?? null) !== null) {
        cargs.push(
            "-testlabels",
            execution.inputFile((params["test_labels"] ?? null))
        );
    }
    if ((params["multiclass"] ?? null) !== null) {
        cargs.push(
            "-multiclass",
            (params["multiclass"] ?? null)
        );
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    return cargs;
}


function v_3dsvm_outputs(
    params: V3dsvmParameters,
    execution: Execution,
): V3dsvmOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dsvmOutputs = {
        root: execution.outputFile("."),
        out_model: execution.outputFile(["model_{output}.1D"].join('')),
        out_alpha: execution.outputFile(["alpha_{output}.1D"].join('')),
        out_bucket: execution.outputFile(["bucket_{output}.1D"].join('')),
        out_predictions: execution.outputFile(["predictions_{output}.1D"].join('')),
    };
    return ret;
}


function v_3dsvm_execute(
    params: V3dsvmParameters,
    execution: Execution,
): V3dsvmOutputs {
    /**
     * Support vector machine analysis of brain data using the SVM-light package.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dsvmOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dsvm_cargs(params, execution)
    const ret = v_3dsvm_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dsvm(
    model: string,
    train_vol: InputPathType | null = null,
    train_labels: InputPathType | null = null,
    mask: InputPathType | null = null,
    no_model_mask: boolean = false,
    alpha: string | null = null,
    bucket: string | null = null,
    type_: "classification" | "regression" | null = null,
    c_value: number | null = null,
    epsilon: number | null = null,
    kernel: "linear" | "polynomial" | "rbf" | "sigmoid" | null = null,
    d_value: number | null = null,
    gamma: number | null = null,
    s_value: number | null = null,
    r_value: number | null = null,
    max_iterations: number | null = null,
    wout: boolean = false,
    test_vol: InputPathType | null = null,
    predictions: string | null = null,
    classout: boolean = false,
    nopred_censored: boolean = false,
    nodetrend: boolean = false,
    nopred_scale: boolean = false,
    test_labels: InputPathType | null = null,
    multiclass: "DAG" | "vote" | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): V3dsvmOutputs {
    /**
     * Support vector machine analysis of brain data using the SVM-light package.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param model The basename for the model brik containing the SVM model during training or testing.
     * @param train_vol A 3D+t AFNI brik dataset to be used for training.
     * @param train_labels Filename of class category .1D labels corresponding to the stimulus paradigm for the training data set.
     * @param mask Specify a mask dataset to only perform the analysis on non-zero mask voxels.
     * @param no_model_mask Flag to enable the omission of a mask file. Required if '-mask' is not used.
     * @param alpha Write the alphas to a specified .1D file.
     * @param bucket Outputs the sum of weighted linear support vectors written out to a functional (fim) brik file.
     * @param type_ Specify type: classification (default) or regression.
     * @param c_value Control SVM model complexity (C value).
     * @param epsilon Specify epsilon for regression.
     * @param kernel Specify type of kernel function.
     * @param d_value D parameter in polynomial kernel.
     * @param gamma Gamma parameter in rbf kernel.
     * @param s_value S parameter in sigmoid/poly kernel.
     * @param r_value R parameter in sigmoid/poly kernel.
     * @param max_iterations Specify the maximum number of iterations for the optimization. Default is 1 million.
     * @param wout Flag to output sum of weighted linear support vectors to the bucket file.
     * @param test_vol A 3D or 3D+t AFNI brik dataset to be used for testing.
     * @param predictions Basename for .1D prediction files.
     * @param classout Flag to specify that prediction files should be integer-valued, corresponding to class category decisions.
     * @param nopred_censored Do not write predicted values for censored time-points to predictions file.
     * @param nodetrend Flag to specify that prediction files should NOT be linearly detrended.
     * @param nopred_scale Do not scale predictions. Values below 0.0 correspond to (class A) and values above 0.0 to (class B).
     * @param test_labels Filename of 'true' class category .1D labels for the test dataset.
     * @param multiclass Specify the multiclass algorithm for classification.
     * @param help Print help message
     * @param version Print version history
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dsvmOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DSVM_METADATA);
    const params = v_3dsvm_params(model, train_vol, train_labels, mask, no_model_mask, alpha, bucket, type_, c_value, epsilon, kernel, d_value, gamma, s_value, r_value, max_iterations, wout, test_vol, predictions, classout, nopred_censored, nodetrend, nopred_scale, test_labels, multiclass, help, version)
    return v_3dsvm_execute(params, execution);
}


export {
      V3dsvmOutputs,
      V3dsvmParameters,
      V_3DSVM_METADATA,
      v_3dsvm,
      v_3dsvm_params,
};
