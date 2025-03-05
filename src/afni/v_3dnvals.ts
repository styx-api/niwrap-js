// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DNVALS_METADATA: Metadata = {
    id: "d7ef1cfaf0a24a61ba64fc6419199d6758fdcf7a.boutiques",
    name: "3dnvals",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dnvalsParameters {
    "__STYXTYPE__": "3dnvals";
    "datasets": Array<InputPathType>;
    "all_flag": boolean;
    "verbose_flag": boolean;
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
        "3dnvals": v_3dnvals_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3dnvals(...)`.
 *
 * @interface
 */
interface V3dnvalsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3dnvals_params(
    datasets: Array<InputPathType>,
    all_flag: boolean = false,
    verbose_flag: boolean = false,
): V3dnvalsParameters {
    /**
     * Build parameters.
    
     * @param datasets Input 3D dataset(s)
     * @param all_flag Print out all 4 dimensions: Nx, Ny, Nz, Nvals
     * @param verbose_flag Print the header name of the dataset first
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dnvals" as const,
        "datasets": datasets,
        "all_flag": all_flag,
        "verbose_flag": verbose_flag,
    };
    return params;
}


function v_3dnvals_cargs(
    params: V3dnvalsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dnvals");
    cargs.push(...(params["datasets"] ?? null).map(f => execution.inputFile(f)));
    if ((params["all_flag"] ?? null)) {
        cargs.push("-all");
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-verbose");
    }
    return cargs;
}


function v_3dnvals_outputs(
    params: V3dnvalsParameters,
    execution: Execution,
): V3dnvalsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dnvalsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3dnvals_execute(
    params: V3dnvalsParameters,
    execution: Execution,
): V3dnvalsOutputs {
    /**
     * Tool to print the number of sub-bricks in a 3D dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dnvalsOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dnvals_cargs(params, execution)
    const ret = v_3dnvals_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dnvals(
    datasets: Array<InputPathType>,
    all_flag: boolean = false,
    verbose_flag: boolean = false,
    runner: Runner | null = null,
): V3dnvalsOutputs {
    /**
     * Tool to print the number of sub-bricks in a 3D dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param datasets Input 3D dataset(s)
     * @param all_flag Print out all 4 dimensions: Nx, Ny, Nz, Nvals
     * @param verbose_flag Print the header name of the dataset first
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dnvalsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DNVALS_METADATA);
    const params = v_3dnvals_params(datasets, all_flag, verbose_flag)
    return v_3dnvals_execute(params, execution);
}


export {
      V3dnvalsOutputs,
      V3dnvalsParameters,
      V_3DNVALS_METADATA,
      v_3dnvals,
      v_3dnvals_params,
};
