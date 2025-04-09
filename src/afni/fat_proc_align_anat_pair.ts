// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FAT_PROC_ALIGN_ANAT_PAIR_METADATA: Metadata = {
    id: "b574466715c601bd21ffc5b2deb0cf613a361f94.boutiques",
    name: "fat_proc_align_anat_pair",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface FatProcAlignAnatPairParameters {
    "__STYXTYPE__": "fat_proc_align_anat_pair";
    "input_t1w": InputPathType;
    "input_t2w": InputPathType;
    "output_prefix": string;
    "output_grid"?: number | null | undefined;
    "out_t2w_grid": boolean;
    "input_t2w_mask"?: InputPathType | null | undefined;
    "do_ss_tmp_t1w": boolean;
    "warp"?: string | null | undefined;
    "matrix"?: InputPathType | null | undefined;
    "workdir"?: string | null | undefined;
    "no_cmd_out": boolean;
    "no_clean": boolean;
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
        "fat_proc_align_anat_pair": fat_proc_align_anat_pair_cargs,
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
        "fat_proc_align_anat_pair": fat_proc_align_anat_pair_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fat_proc_align_anat_pair(...)`.
 *
 * @interface
 */
interface FatProcAlignAnatPairOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Aligned T1w volume
     */
    aligned_t1w: OutputPathType;
    /**
     * QC snapshot of the T1w volume overlaying the T2w volume
     */
    qc_snapshot_t1w_on_t2w: OutputPathType;
    /**
     * QC snapshot of the T1w edges overlaying the T2w volume
     */
    qc_snapshot_t1w_edges_on_t2w: OutputPathType;
}


function fat_proc_align_anat_pair_params(
    input_t1w: InputPathType,
    input_t2w: InputPathType,
    output_prefix: string,
    output_grid: number | null = null,
    out_t2w_grid: boolean = false,
    input_t2w_mask: InputPathType | null = null,
    do_ss_tmp_t1w: boolean = false,
    warp: string | null = null,
    matrix: InputPathType | null = null,
    workdir: string | null = null,
    no_cmd_out: boolean = false,
    no_clean: boolean = false,
): FatProcAlignAnatPairParameters {
    /**
     * Build parameters.
    
     * @param input_t1w T1-weighted volume
     * @param input_t2w T2-weighted volume
     * @param output_prefix Output prefix for files and snapshots
     * @param output_grid Specify output T1w volume's final resolution (isotropic)
     * @param out_t2w_grid Final T1w volume is on the T2W volume's grid
     * @param input_t2w_mask Input a mask to apply to the T2w volume for alignment
     * @param do_ss_tmp_t1w Apply skullstripping to the T1w volume during an intermediate step
     * @param warp Specify the degrees of freedom for warping using options from 3dAllineate
     * @param matrix Apply a pre-made matrix from 3dAllineate
     * @param workdir Specify a working directory
     * @param no_cmd_out Do not save the command line call and the location where it was run
     * @param no_clean Do not delete the temporary working directory
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fat_proc_align_anat_pair" as const,
        "input_t1w": input_t1w,
        "input_t2w": input_t2w,
        "output_prefix": output_prefix,
        "out_t2w_grid": out_t2w_grid,
        "do_ss_tmp_t1w": do_ss_tmp_t1w,
        "no_cmd_out": no_cmd_out,
        "no_clean": no_clean,
    };
    if (output_grid !== null) {
        params["output_grid"] = output_grid;
    }
    if (input_t2w_mask !== null) {
        params["input_t2w_mask"] = input_t2w_mask;
    }
    if (warp !== null) {
        params["warp"] = warp;
    }
    if (matrix !== null) {
        params["matrix"] = matrix;
    }
    if (workdir !== null) {
        params["workdir"] = workdir;
    }
    return params;
}


function fat_proc_align_anat_pair_cargs(
    params: FatProcAlignAnatPairParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fat_proc_align_anat_pair");
    cargs.push(
        "-in_t1w",
        execution.inputFile((params["input_t1w"] ?? null))
    );
    cargs.push(
        "-in_t2w",
        execution.inputFile((params["input_t2w"] ?? null))
    );
    cargs.push(
        "-prefix",
        (params["output_prefix"] ?? null)
    );
    if ((params["output_grid"] ?? null) !== null) {
        cargs.push(
            "-newgrid",
            String((params["output_grid"] ?? null))
        );
    }
    if ((params["out_t2w_grid"] ?? null)) {
        cargs.push("-out_t2w_grid");
    }
    if ((params["input_t2w_mask"] ?? null) !== null) {
        cargs.push(
            "-in_t2w_mask",
            execution.inputFile((params["input_t2w_mask"] ?? null))
        );
    }
    if ((params["do_ss_tmp_t1w"] ?? null)) {
        cargs.push("-do_ss_tmp_t1w");
    }
    if ((params["warp"] ?? null) !== null) {
        cargs.push(
            "-warp",
            (params["warp"] ?? null)
        );
    }
    if ((params["matrix"] ?? null) !== null) {
        cargs.push(
            "-matrix",
            execution.inputFile((params["matrix"] ?? null))
        );
    }
    if ((params["workdir"] ?? null) !== null) {
        cargs.push(
            "-workdir",
            (params["workdir"] ?? null)
        );
    }
    if ((params["no_cmd_out"] ?? null)) {
        cargs.push("-no_cmd_out");
    }
    if ((params["no_clean"] ?? null)) {
        cargs.push("-no_clean");
    }
    return cargs;
}


function fat_proc_align_anat_pair_outputs(
    params: FatProcAlignAnatPairParameters,
    execution: Execution,
): FatProcAlignAnatPairOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FatProcAlignAnatPairOutputs = {
        root: execution.outputFile("."),
        aligned_t1w: execution.outputFile([(params["output_prefix"] ?? null), "_t1w_aligned.nii.gz"].join('')),
        qc_snapshot_t1w_on_t2w: execution.outputFile([(params["output_prefix"] ?? null), "_QC_T1w_over_T2w.png"].join('')),
        qc_snapshot_t1w_edges_on_t2w: execution.outputFile([(params["output_prefix"] ?? null), "_QC_T1w_edges_over_T2w.png"].join('')),
    };
    return ret;
}


function fat_proc_align_anat_pair_execute(
    params: FatProcAlignAnatPairParameters,
    execution: Execution,
): FatProcAlignAnatPairOutputs {
    /**
     * A tool for aligning a T1w anatomical image to a T2w anatomical image using solid-body parameters (translation and rotation).
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FatProcAlignAnatPairOutputs`).
     */
    params = execution.params(params)
    const cargs = fat_proc_align_anat_pair_cargs(params, execution)
    const ret = fat_proc_align_anat_pair_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fat_proc_align_anat_pair(
    input_t1w: InputPathType,
    input_t2w: InputPathType,
    output_prefix: string,
    output_grid: number | null = null,
    out_t2w_grid: boolean = false,
    input_t2w_mask: InputPathType | null = null,
    do_ss_tmp_t1w: boolean = false,
    warp: string | null = null,
    matrix: InputPathType | null = null,
    workdir: string | null = null,
    no_cmd_out: boolean = false,
    no_clean: boolean = false,
    runner: Runner | null = null,
): FatProcAlignAnatPairOutputs {
    /**
     * A tool for aligning a T1w anatomical image to a T2w anatomical image using solid-body parameters (translation and rotation).
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_t1w T1-weighted volume
     * @param input_t2w T2-weighted volume
     * @param output_prefix Output prefix for files and snapshots
     * @param output_grid Specify output T1w volume's final resolution (isotropic)
     * @param out_t2w_grid Final T1w volume is on the T2W volume's grid
     * @param input_t2w_mask Input a mask to apply to the T2w volume for alignment
     * @param do_ss_tmp_t1w Apply skullstripping to the T1w volume during an intermediate step
     * @param warp Specify the degrees of freedom for warping using options from 3dAllineate
     * @param matrix Apply a pre-made matrix from 3dAllineate
     * @param workdir Specify a working directory
     * @param no_cmd_out Do not save the command line call and the location where it was run
     * @param no_clean Do not delete the temporary working directory
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FatProcAlignAnatPairOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FAT_PROC_ALIGN_ANAT_PAIR_METADATA);
    const params = fat_proc_align_anat_pair_params(input_t1w, input_t2w, output_prefix, output_grid, out_t2w_grid, input_t2w_mask, do_ss_tmp_t1w, warp, matrix, workdir, no_cmd_out, no_clean)
    return fat_proc_align_anat_pair_execute(params, execution);
}


export {
      FAT_PROC_ALIGN_ANAT_PAIR_METADATA,
      FatProcAlignAnatPairOutputs,
      FatProcAlignAnatPairParameters,
      fat_proc_align_anat_pair,
      fat_proc_align_anat_pair_params,
};
