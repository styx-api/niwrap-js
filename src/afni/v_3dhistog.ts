// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DHISTOG_METADATA: Metadata = {
    id: "992d25c6f72b404f788d8f27f20442680bbe9bdd.boutiques",
    name: "3dhistog",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dhistogParameters {
    "__STYXTYPE__": "3dhistog";
    "dataset": InputPathType;
    "nbin"?: number | null | undefined;
    "dind"?: number | null | undefined;
    "omit"?: Array<number> | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "roi_mask"?: InputPathType | null | undefined;
    "doall": boolean;
    "noempty": boolean;
    "notitle": boolean;
    "log10": boolean;
    "pdf": boolean;
    "min"?: number | null | undefined;
    "max"?: number | null | undefined;
    "igfac": boolean;
    "int": boolean;
    "float": boolean;
    "unq"?: string | null | undefined;
    "prefix"?: string | null | undefined;
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
        "3dhistog": v_3dhistog_cargs,
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
        "3dhistog": v_3dhistog_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3dhistog(...)`.
 *
 * @interface
 */
interface V3dhistogOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Histogram output when -prefix option is used
     */
    histogram_output: OutputPathType;
}


function v_3dhistog_params(
    dataset: InputPathType,
    nbin: number | null = null,
    dind: number | null = null,
    omit: Array<number> | null = null,
    mask: InputPathType | null = null,
    roi_mask: InputPathType | null = null,
    doall: boolean = false,
    noempty: boolean = false,
    notitle: boolean = false,
    log10: boolean = false,
    pdf: boolean = false,
    min: number | null = null,
    max: number | null = null,
    igfac: boolean = false,
    int: boolean = false,
    float: boolean = false,
    unq: string | null = null,
    prefix: string | null = null,
): V3dhistogParameters {
    /**
     * Build parameters.
    
     * @param dataset Input dataset
     * @param nbin Use specified number of bins
     * @param dind Use data from specified sub-brick index
     * @param omit Omit specified value from the count
     * @param mask Use mask dataset to determine which voxels to use
     * @param roi_mask Create histogram for each non-zero value in 'r' dataset
     * @param doall Include all sub-bricks in the calculation
     * @param noempty Only output bins that are not empty
     * @param notitle Leave the title line off the output
     * @param log10 Output log10() of the counts
     * @param pdf Output the counts divided by the number of samples
     * @param min Specify minimum (inclusive) of histogram
     * @param max Specify maximum (inclusive) of histogram
     * @param igfac Ignore sub-brick scale factors and histogram-ize the 'raw' data
     * @param int Treat data and output as integers
     * @param float Treat data and output as floats
     * @param unq Writes out the sorted unique values to file
     * @param prefix Write a copy of the histogram into specified file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dhistog" as const,
        "dataset": dataset,
        "doall": doall,
        "noempty": noempty,
        "notitle": notitle,
        "log10": log10,
        "pdf": pdf,
        "igfac": igfac,
        "int": int,
        "float": float,
    };
    if (nbin !== null) {
        params["nbin"] = nbin;
    }
    if (dind !== null) {
        params["dind"] = dind;
    }
    if (omit !== null) {
        params["omit"] = omit;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (roi_mask !== null) {
        params["roi_mask"] = roi_mask;
    }
    if (min !== null) {
        params["min"] = min;
    }
    if (max !== null) {
        params["max"] = max;
    }
    if (unq !== null) {
        params["unq"] = unq;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    return params;
}


function v_3dhistog_cargs(
    params: V3dhistogParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dhistog");
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    if ((params["nbin"] ?? null) !== null) {
        cargs.push(
            "-nbin",
            String((params["nbin"] ?? null))
        );
    }
    if ((params["dind"] ?? null) !== null) {
        cargs.push(
            "-dind",
            String((params["dind"] ?? null))
        );
    }
    if ((params["omit"] ?? null) !== null) {
        cargs.push(
            "-omit",
            ...(params["omit"] ?? null).map(String)
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["roi_mask"] ?? null) !== null) {
        cargs.push(
            "-roi_mask",
            execution.inputFile((params["roi_mask"] ?? null))
        );
    }
    if ((params["doall"] ?? null)) {
        cargs.push("-doall");
    }
    if ((params["noempty"] ?? null)) {
        cargs.push("-noempty");
    }
    if ((params["notitle"] ?? null)) {
        cargs.push("-notitle");
    }
    if ((params["log10"] ?? null)) {
        cargs.push("-log10");
    }
    if ((params["pdf"] ?? null)) {
        cargs.push("-pdf");
    }
    if ((params["min"] ?? null) !== null) {
        cargs.push(
            "-min",
            String((params["min"] ?? null))
        );
    }
    if ((params["max"] ?? null) !== null) {
        cargs.push(
            "-max",
            String((params["max"] ?? null))
        );
    }
    if ((params["igfac"] ?? null)) {
        cargs.push("-igfac");
    }
    if ((params["int"] ?? null)) {
        cargs.push("-int");
    }
    if ((params["float"] ?? null)) {
        cargs.push("-float");
    }
    if ((params["unq"] ?? null) !== null) {
        cargs.push(
            "-unq",
            (params["unq"] ?? null)
        );
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    return cargs;
}


function v_3dhistog_outputs(
    params: V3dhistogParameters,
    execution: Execution,
): V3dhistogOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dhistogOutputs = {
        root: execution.outputFile("."),
        histogram_output: execution.outputFile(["HOUT.1D"].join('')),
    };
    return ret;
}


function v_3dhistog_execute(
    params: V3dhistogParameters,
    execution: Execution,
): V3dhistogOutputs {
    /**
     * Compute histogram of a 3D dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dhistogOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dhistog_cargs(params, execution)
    const ret = v_3dhistog_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dhistog(
    dataset: InputPathType,
    nbin: number | null = null,
    dind: number | null = null,
    omit: Array<number> | null = null,
    mask: InputPathType | null = null,
    roi_mask: InputPathType | null = null,
    doall: boolean = false,
    noempty: boolean = false,
    notitle: boolean = false,
    log10: boolean = false,
    pdf: boolean = false,
    min: number | null = null,
    max: number | null = null,
    igfac: boolean = false,
    int: boolean = false,
    float: boolean = false,
    unq: string | null = null,
    prefix: string | null = null,
    runner: Runner | null = null,
): V3dhistogOutputs {
    /**
     * Compute histogram of a 3D dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset Input dataset
     * @param nbin Use specified number of bins
     * @param dind Use data from specified sub-brick index
     * @param omit Omit specified value from the count
     * @param mask Use mask dataset to determine which voxels to use
     * @param roi_mask Create histogram for each non-zero value in 'r' dataset
     * @param doall Include all sub-bricks in the calculation
     * @param noempty Only output bins that are not empty
     * @param notitle Leave the title line off the output
     * @param log10 Output log10() of the counts
     * @param pdf Output the counts divided by the number of samples
     * @param min Specify minimum (inclusive) of histogram
     * @param max Specify maximum (inclusive) of histogram
     * @param igfac Ignore sub-brick scale factors and histogram-ize the 'raw' data
     * @param int Treat data and output as integers
     * @param float Treat data and output as floats
     * @param unq Writes out the sorted unique values to file
     * @param prefix Write a copy of the histogram into specified file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dhistogOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DHISTOG_METADATA);
    const params = v_3dhistog_params(dataset, nbin, dind, omit, mask, roi_mask, doall, noempty, notitle, log10, pdf, min, max, igfac, int, float, unq, prefix)
    return v_3dhistog_execute(params, execution);
}


export {
      V3dhistogOutputs,
      V3dhistogParameters,
      V_3DHISTOG_METADATA,
      v_3dhistog,
      v_3dhistog_params,
};
