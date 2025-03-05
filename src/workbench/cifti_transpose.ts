// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_TRANSPOSE_METADATA: Metadata = {
    id: "e676cb4d2e4814898c733e3dc3fc432bdbe3732f.boutiques",
    name: "cifti-transpose",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiTransposeParameters {
    "__STYXTYPE__": "cifti-transpose";
    "cifti_in": InputPathType;
    "cifti_out": string;
    "opt_mem_limit_limit_gb"?: number | null | undefined;
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
        "cifti-transpose": cifti_transpose_cargs,
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
        "cifti-transpose": cifti_transpose_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `cifti_transpose(...)`.
 *
 * @interface
 */
interface CiftiTransposeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output cifti file
     */
    cifti_out: OutputPathType;
}


function cifti_transpose_params(
    cifti_in: InputPathType,
    cifti_out: string,
    opt_mem_limit_limit_gb: number | null = null,
): CiftiTransposeParameters {
    /**
     * Build parameters.
    
     * @param cifti_in the input cifti file
     * @param cifti_out the output cifti file
     * @param opt_mem_limit_limit_gb restrict memory usage: memory limit in gigabytes
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-transpose" as const,
        "cifti_in": cifti_in,
        "cifti_out": cifti_out,
    };
    if (opt_mem_limit_limit_gb !== null) {
        params["opt_mem_limit_limit_gb"] = opt_mem_limit_limit_gb;
    }
    return params;
}


function cifti_transpose_cargs(
    params: CiftiTransposeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-cifti-transpose");
    cargs.push(execution.inputFile((params["cifti_in"] ?? null)));
    cargs.push((params["cifti_out"] ?? null));
    if ((params["opt_mem_limit_limit_gb"] ?? null) !== null) {
        cargs.push(
            "-mem-limit",
            String((params["opt_mem_limit_limit_gb"] ?? null))
        );
    }
    return cargs;
}


function cifti_transpose_outputs(
    params: CiftiTransposeParameters,
    execution: Execution,
): CiftiTransposeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiTransposeOutputs = {
        root: execution.outputFile("."),
        cifti_out: execution.outputFile([(params["cifti_out"] ?? null)].join('')),
    };
    return ret;
}


function cifti_transpose_execute(
    params: CiftiTransposeParameters,
    execution: Execution,
): CiftiTransposeOutputs {
    /**
     * Transpose a cifti file.
     * 
     * The input must be a 2-dimensional cifti file.  The output is a cifti file where every row in the input is a column in the output.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiTransposeOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_transpose_cargs(params, execution)
    const ret = cifti_transpose_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_transpose(
    cifti_in: InputPathType,
    cifti_out: string,
    opt_mem_limit_limit_gb: number | null = null,
    runner: Runner | null = null,
): CiftiTransposeOutputs {
    /**
     * Transpose a cifti file.
     * 
     * The input must be a 2-dimensional cifti file.  The output is a cifti file where every row in the input is a column in the output.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param cifti_in the input cifti file
     * @param cifti_out the output cifti file
     * @param opt_mem_limit_limit_gb restrict memory usage: memory limit in gigabytes
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiTransposeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_TRANSPOSE_METADATA);
    const params = cifti_transpose_params(cifti_in, cifti_out, opt_mem_limit_limit_gb)
    return cifti_transpose_execute(params, execution);
}


export {
      CIFTI_TRANSPOSE_METADATA,
      CiftiTransposeOutputs,
      CiftiTransposeParameters,
      cifti_transpose,
      cifti_transpose_params,
};
