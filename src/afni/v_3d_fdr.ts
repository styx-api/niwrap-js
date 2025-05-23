// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_FDR_METADATA: Metadata = {
    id: "aabaf1707d0311895de132618ad782f134d28f72.boutiques",
    name: "3dFDR",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dFdrParameters {
    "__STYXTYPE__": "3dFDR";
    "input_file": InputPathType;
    "input1d_file"?: InputPathType | null | undefined;
    "mask_file"?: InputPathType | null | undefined;
    "mask_threshold"?: number | null | undefined;
    "constant_type"?: "cind" | "cdep" | null | undefined;
    "quiet": boolean;
    "list": boolean;
    "prefix": string;
    "mode_option"?: "old" | "new" | null | undefined;
    "pmask": boolean;
    "nopmask": boolean;
    "force": boolean;
    "float": boolean;
    "qval": boolean;
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
        "3dFDR": v_3d_fdr_cargs,
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
        "3dFDR": v_3d_fdr_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_fdr(...)`.
 *
 * @interface
 */
interface V3dFdrOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset in BRIK format
     */
    output_brik: OutputPathType;
    /**
     * Output dataset in HEAD format
     */
    output_head: OutputPathType;
    /**
     * Output list of voxel q-values
     */
    output_1d: OutputPathType;
}


function v_3d_fdr_params(
    input_file: InputPathType,
    prefix: string,
    input1d_file: InputPathType | null = null,
    mask_file: InputPathType | null = null,
    mask_threshold: number | null = null,
    constant_type: "cind" | "cdep" | null = null,
    quiet: boolean = false,
    list: boolean = false,
    mode_option: "old" | "new" | null = null,
    pmask: boolean = false,
    nopmask: boolean = false,
    force: boolean = false,
    float: boolean = false,
    qval: boolean = false,
): V3dFdrParameters {
    /**
     * Build parameters.
    
     * @param input_file Input 3D functional dataset filename
     * @param prefix Use 'pname' for the output dataset prefix name.
     * @param input1d_file .1D file containing column of p-values
     * @param mask_file Use mask values from file mname. If file mname contains more than 1 sub-brick, the mask sub-brick must be specified. Generally should be used to avoid counting non-brain voxels.
     * @param mask_threshold Only voxels whose corresponding mask value is greater than or equal to the specified value in absolute terms will be considered. Default is 1.
     * @param constant_type Set constant c(N): 1 for independent p-values (default) or sum(1/i, i=1,...,N) for any joint distribution.
     * @param quiet Suppress screen output.
     * @param list Write sorted list of voxel q-values to screen.
     * @param mode_option Use the old or new mode of operation. 'new' is now the default.
     * @param pmask Ignore p=1 voxels (default in new mode).
     * @param nopmask Count p=1 voxels (default in old mode).
     * @param force Force conversion of all sub-bricks, treating them as p-values.
     * @param float Force the output of z-scores in floating point format.
     * @param qval Force the output of q-values rather than z-scores.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dFDR" as const,
        "input_file": input_file,
        "quiet": quiet,
        "list": list,
        "prefix": prefix,
        "pmask": pmask,
        "nopmask": nopmask,
        "force": force,
        "float": float,
        "qval": qval,
    };
    if (input1d_file !== null) {
        params["input1d_file"] = input1d_file;
    }
    if (mask_file !== null) {
        params["mask_file"] = mask_file;
    }
    if (mask_threshold !== null) {
        params["mask_threshold"] = mask_threshold;
    }
    if (constant_type !== null) {
        params["constant_type"] = constant_type;
    }
    if (mode_option !== null) {
        params["mode_option"] = mode_option;
    }
    return params;
}


function v_3d_fdr_cargs(
    params: V3dFdrParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dFDR");
    cargs.push(
        "-input",
        execution.inputFile((params["input_file"] ?? null))
    );
    if ((params["input1d_file"] ?? null) !== null) {
        cargs.push(
            "-input1D",
            execution.inputFile((params["input1d_file"] ?? null))
        );
    }
    if ((params["mask_file"] ?? null) !== null) {
        cargs.push(
            "-mask_file",
            execution.inputFile((params["mask_file"] ?? null))
        );
    }
    if ((params["mask_threshold"] ?? null) !== null) {
        cargs.push(
            "-mask_thr",
            String((params["mask_threshold"] ?? null))
        );
    }
    if ((params["constant_type"] ?? null) !== null) {
        cargs.push(
            "-c",
            (params["constant_type"] ?? null)
        );
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["list"] ?? null)) {
        cargs.push("-list");
    }
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["mode_option"] ?? null) !== null) {
        cargs.push(
            "-",
            (params["mode_option"] ?? null)
        );
    }
    if ((params["pmask"] ?? null)) {
        cargs.push("-pmask");
    }
    if ((params["nopmask"] ?? null)) {
        cargs.push("-nopmask");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["float"] ?? null)) {
        cargs.push("-float");
    }
    if ((params["qval"] ?? null)) {
        cargs.push("-qval");
    }
    return cargs;
}


function v_3d_fdr_outputs(
    params: V3dFdrParameters,
    execution: Execution,
): V3dFdrOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dFdrOutputs = {
        root: execution.outputFile("."),
        output_brik: execution.outputFile([(params["prefix"] ?? null), "+orig.BRIK"].join('')),
        output_head: execution.outputFile([(params["prefix"] ?? null), "+orig.HEAD"].join('')),
        output_1d: execution.outputFile([(params["prefix"] ?? null), ".1D"].join('')),
    };
    return ret;
}


function v_3d_fdr_execute(
    params: V3dFdrParameters,
    execution: Execution,
): V3dFdrOutputs {
    /**
     * A tool for applying False Discovery Rate (FDR) thresholding to voxelwise statistics in 3D functional datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dFdrOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_fdr_cargs(params, execution)
    const ret = v_3d_fdr_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_fdr(
    input_file: InputPathType,
    prefix: string,
    input1d_file: InputPathType | null = null,
    mask_file: InputPathType | null = null,
    mask_threshold: number | null = null,
    constant_type: "cind" | "cdep" | null = null,
    quiet: boolean = false,
    list: boolean = false,
    mode_option: "old" | "new" | null = null,
    pmask: boolean = false,
    nopmask: boolean = false,
    force: boolean = false,
    float: boolean = false,
    qval: boolean = false,
    runner: Runner | null = null,
): V3dFdrOutputs {
    /**
     * A tool for applying False Discovery Rate (FDR) thresholding to voxelwise statistics in 3D functional datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Input 3D functional dataset filename
     * @param prefix Use 'pname' for the output dataset prefix name.
     * @param input1d_file .1D file containing column of p-values
     * @param mask_file Use mask values from file mname. If file mname contains more than 1 sub-brick, the mask sub-brick must be specified. Generally should be used to avoid counting non-brain voxels.
     * @param mask_threshold Only voxels whose corresponding mask value is greater than or equal to the specified value in absolute terms will be considered. Default is 1.
     * @param constant_type Set constant c(N): 1 for independent p-values (default) or sum(1/i, i=1,...,N) for any joint distribution.
     * @param quiet Suppress screen output.
     * @param list Write sorted list of voxel q-values to screen.
     * @param mode_option Use the old or new mode of operation. 'new' is now the default.
     * @param pmask Ignore p=1 voxels (default in new mode).
     * @param nopmask Count p=1 voxels (default in old mode).
     * @param force Force conversion of all sub-bricks, treating them as p-values.
     * @param float Force the output of z-scores in floating point format.
     * @param qval Force the output of q-values rather than z-scores.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dFdrOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_FDR_METADATA);
    const params = v_3d_fdr_params(input_file, prefix, input1d_file, mask_file, mask_threshold, constant_type, quiet, list, mode_option, pmask, nopmask, force, float, qval)
    return v_3d_fdr_execute(params, execution);
}


export {
      V3dFdrOutputs,
      V3dFdrParameters,
      V_3D_FDR_METADATA,
      v_3d_fdr,
      v_3d_fdr_params,
};
