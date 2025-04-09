// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DPC_METADATA: Metadata = {
    id: "aa84aba2b62d9b7a4e468237b32c0eb69d2496f8.boutiques",
    name: "3dpc",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dpcParameters {
    "__STYXTYPE__": "3dpc";
    "datasets": Array<InputPathType>;
    "dmean": boolean;
    "vmean": boolean;
    "vnorm": boolean;
    "normalize": boolean;
    "nscale": boolean;
    "pcsave"?: string | null | undefined;
    "reduce"?: Array<string> | null | undefined;
    "prefix"?: string | null | undefined;
    "dummy_lines"?: number | null | undefined;
    "verbose": boolean;
    "quiet": boolean;
    "eigonly": boolean;
    "float": boolean;
    "mask"?: InputPathType | null | undefined;
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
        "3dpc": v_3dpc_cargs,
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
        "3dpc": v_3dpc_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3dpc(...)`.
 *
 * @interface
 */
interface V3dpcOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset file
     */
    output_dataset: OutputPathType | null;
    /**
     * Output dataset header file
     */
    output_header: OutputPathType | null;
    /**
     * File with computed eigenvalues
     */
    output_eig: OutputPathType | null;
    /**
     * File with all eigen-timeseries
     */
    output_vec: OutputPathType | null;
    /**
     * File with individual eigenvalue timeseries
     */
    output_individual_vec: OutputPathType | null;
}


function v_3dpc_params(
    datasets: Array<InputPathType>,
    dmean: boolean = false,
    vmean: boolean = false,
    vnorm: boolean = false,
    normalize: boolean = false,
    nscale: boolean = false,
    pcsave: string | null = null,
    reduce: Array<string> | null = null,
    prefix: string | null = null,
    dummy_lines: number | null = null,
    verbose: boolean = false,
    quiet: boolean = false,
    eigonly: boolean = false,
    float: boolean = false,
    mask: InputPathType | null = null,
): V3dpcParameters {
    /**
     * Build parameters.
    
     * @param datasets Input dataset(s) with sub-brick selector list support
     * @param dmean Remove the mean from each input brick (across space)
     * @param vmean Remove the mean from each input voxel (across bricks)
     * @param vnorm L2 normalize each input voxel time series
     * @param normalize L2 normalize each input brick (after mean subtraction)
     * @param nscale Scale the covariance matrix by the number of samples
     * @param pcsave 'sss' is the number of components to save in the output
     * @param reduce Compute a dimensionally reduced dataset with top 'r' eigenvalues and write to disk in dataset 'pp'
     * @param prefix Name for the output dataset
     * @param dummy_lines Add 'ddd' dummy lines to the top of each *.1D file
     * @param verbose Print progress reports during the computations
     * @param quiet Don't print progress reports
     * @param eigonly Only compute eigenvalues, write them to 'pname'_eig.1D, then stop
     * @param float Save eigen-bricks as floats (default = shorts)
     * @param mask Use the 0 sub-brick of dataset 'mset' as a mask indicating which voxels to analyze
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dpc" as const,
        "datasets": datasets,
        "dmean": dmean,
        "vmean": vmean,
        "vnorm": vnorm,
        "normalize": normalize,
        "nscale": nscale,
        "verbose": verbose,
        "quiet": quiet,
        "eigonly": eigonly,
        "float": float,
    };
    if (pcsave !== null) {
        params["pcsave"] = pcsave;
    }
    if (reduce !== null) {
        params["reduce"] = reduce;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (dummy_lines !== null) {
        params["dummy_lines"] = dummy_lines;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    return params;
}


function v_3dpc_cargs(
    params: V3dpcParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dpc");
    cargs.push(...(params["datasets"] ?? null).map(f => execution.inputFile(f)));
    if ((params["dmean"] ?? null)) {
        cargs.push("-dmean");
    }
    if ((params["vmean"] ?? null)) {
        cargs.push("-vmean");
    }
    if ((params["vnorm"] ?? null)) {
        cargs.push("-vnorm");
    }
    if ((params["normalize"] ?? null)) {
        cargs.push("-normalize");
    }
    if ((params["nscale"] ?? null)) {
        cargs.push("-nscale");
    }
    if ((params["pcsave"] ?? null) !== null) {
        cargs.push(
            "-pcsave",
            (params["pcsave"] ?? null)
        );
    }
    if ((params["reduce"] ?? null) !== null) {
        cargs.push(
            "-reduce",
            ...(params["reduce"] ?? null)
        );
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["dummy_lines"] ?? null) !== null) {
        cargs.push(
            "-1ddum",
            String((params["dummy_lines"] ?? null))
        );
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-verbose");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["eigonly"] ?? null)) {
        cargs.push("-eigonly");
    }
    if ((params["float"] ?? null)) {
        cargs.push("-float");
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    return cargs;
}


function v_3dpc_outputs(
    params: V3dpcParameters,
    execution: Execution,
): V3dpcOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dpcOutputs = {
        root: execution.outputFile("."),
        output_dataset: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "+orig.BRIK"].join('')) : null,
        output_header: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "+orig.HEAD"].join('')) : null,
        output_eig: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "_eig.1D"].join('')) : null,
        output_vec: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "_vec.1D"].join('')) : null,
        output_individual_vec: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "[NN].1D"].join('')) : null,
    };
    return ret;
}


function v_3dpc_execute(
    params: V3dpcParameters,
    execution: Execution,
): V3dpcOutputs {
    /**
     * Principal Component Analysis of 3D Datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dpcOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dpc_cargs(params, execution)
    const ret = v_3dpc_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dpc(
    datasets: Array<InputPathType>,
    dmean: boolean = false,
    vmean: boolean = false,
    vnorm: boolean = false,
    normalize: boolean = false,
    nscale: boolean = false,
    pcsave: string | null = null,
    reduce: Array<string> | null = null,
    prefix: string | null = null,
    dummy_lines: number | null = null,
    verbose: boolean = false,
    quiet: boolean = false,
    eigonly: boolean = false,
    float: boolean = false,
    mask: InputPathType | null = null,
    runner: Runner | null = null,
): V3dpcOutputs {
    /**
     * Principal Component Analysis of 3D Datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param datasets Input dataset(s) with sub-brick selector list support
     * @param dmean Remove the mean from each input brick (across space)
     * @param vmean Remove the mean from each input voxel (across bricks)
     * @param vnorm L2 normalize each input voxel time series
     * @param normalize L2 normalize each input brick (after mean subtraction)
     * @param nscale Scale the covariance matrix by the number of samples
     * @param pcsave 'sss' is the number of components to save in the output
     * @param reduce Compute a dimensionally reduced dataset with top 'r' eigenvalues and write to disk in dataset 'pp'
     * @param prefix Name for the output dataset
     * @param dummy_lines Add 'ddd' dummy lines to the top of each *.1D file
     * @param verbose Print progress reports during the computations
     * @param quiet Don't print progress reports
     * @param eigonly Only compute eigenvalues, write them to 'pname'_eig.1D, then stop
     * @param float Save eigen-bricks as floats (default = shorts)
     * @param mask Use the 0 sub-brick of dataset 'mset' as a mask indicating which voxels to analyze
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dpcOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DPC_METADATA);
    const params = v_3dpc_params(datasets, dmean, vmean, vnorm, normalize, nscale, pcsave, reduce, prefix, dummy_lines, verbose, quiet, eigonly, float, mask)
    return v_3dpc_execute(params, execution);
}


export {
      V3dpcOutputs,
      V3dpcParameters,
      V_3DPC_METADATA,
      v_3dpc,
      v_3dpc_params,
};
