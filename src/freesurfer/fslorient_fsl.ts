// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSLORIENT_FSL_METADATA: Metadata = {
    id: "91c87d301655f1a487272843a72c1efbca6dd79a.boutiques",
    name: "fslorient.fsl",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FslorientFslParameters {
    "__STYXTYPE__": "fslorient.fsl";
    "swap_orient": boolean;
    "filename": InputPathType;
    "set_qform"?: Array<number> | null | undefined;
    "set_qform_code"?: string | null | undefined;
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
        "fslorient.fsl": fslorient_fsl_cargs,
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
 * Output object returned when calling `fslorient_fsl(...)`.
 *
 * @interface
 */
interface FslorientFslOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fslorient_fsl_params(
    filename: InputPathType,
    swap_orient: boolean = false,
    set_qform: Array<number> | null = null,
    set_qform_code: string | null = null,
): FslorientFslParameters {
    /**
     * Build parameters.
    
     * @param filename Input image filename
     * @param swap_orient Swaps FSL radiological and FSL neurological
     * @param set_qform Sets the 16 elements of the qform matrix
     * @param set_qform_code Sets qform integer code
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fslorient.fsl" as const,
        "swap_orient": swap_orient,
        "filename": filename,
    };
    if (set_qform !== null) {
        params["set_qform"] = set_qform;
    }
    if (set_qform_code !== null) {
        params["set_qform_code"] = set_qform_code;
    }
    return params;
}


function fslorient_fsl_cargs(
    params: FslorientFslParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fslorient");
    if ((params["swap_orient"] ?? null)) {
        cargs.push("-swaporient");
    }
    cargs.push(execution.inputFile((params["filename"] ?? null)));
    if ((params["set_qform"] ?? null) !== null) {
        cargs.push(
            "-setqform",
            ...(params["set_qform"] ?? null).map(String)
        );
    }
    if ((params["set_qform_code"] ?? null) !== null) {
        cargs.push(
            "-setqformcode",
            (params["set_qform_code"] ?? null)
        );
    }
    return cargs;
}


function fslorient_fsl_outputs(
    params: FslorientFslParameters,
    execution: Execution,
): FslorientFslOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslorientFslOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fslorient_fsl_execute(
    params: FslorientFslParameters,
    execution: Execution,
): FslorientFslOutputs {
    /**
     * A tool for managing the orientations and orientation headers of NIFTI images.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslorientFslOutputs`).
     */
    params = execution.params(params)
    const cargs = fslorient_fsl_cargs(params, execution)
    const ret = fslorient_fsl_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fslorient_fsl(
    filename: InputPathType,
    swap_orient: boolean = false,
    set_qform: Array<number> | null = null,
    set_qform_code: string | null = null,
    runner: Runner | null = null,
): FslorientFslOutputs {
    /**
     * A tool for managing the orientations and orientation headers of NIFTI images.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param filename Input image filename
     * @param swap_orient Swaps FSL radiological and FSL neurological
     * @param set_qform Sets the 16 elements of the qform matrix
     * @param set_qform_code Sets qform integer code
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslorientFslOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSLORIENT_FSL_METADATA);
    const params = fslorient_fsl_params(filename, swap_orient, set_qform, set_qform_code)
    return fslorient_fsl_execute(params, execution);
}


export {
      FSLORIENT_FSL_METADATA,
      FslorientFslOutputs,
      FslorientFslParameters,
      fslorient_fsl,
      fslorient_fsl_params,
};
