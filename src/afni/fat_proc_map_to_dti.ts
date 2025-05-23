// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FAT_PROC_MAP_TO_DTI_METADATA: Metadata = {
    id: "2071c7c40db2fbca86d8b9d2a81d43349c721ca3.boutiques",
    name: "fat_proc_map_to_dti",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface FatProcMapToDtiParameters {
    "__STYXTYPE__": "fat_proc_map_to_dti";
    "source": InputPathType;
    "base": InputPathType;
    "prefix": string;
    "followers_nn"?: Array<InputPathType> | null | undefined;
    "followers_wsinc5"?: Array<InputPathType> | null | undefined;
    "followers_surf"?: Array<InputPathType> | null | undefined;
    "followers_ndset"?: Array<InputPathType> | null | undefined;
    "followers_spec"?: Array<InputPathType> | null | undefined;
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
        "fat_proc_map_to_dti": fat_proc_map_to_dti_cargs,
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
 * Output object returned when calling `fat_proc_map_to_dti(...)`.
 *
 * @interface
 */
interface FatProcMapToDtiOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fat_proc_map_to_dti_params(
    source: InputPathType,
    base: InputPathType,
    prefix: string,
    followers_nn: Array<InputPathType> | null = null,
    followers_wsinc5: Array<InputPathType> | null = null,
    followers_surf: Array<InputPathType> | null = null,
    followers_ndset: Array<InputPathType> | null = null,
    followers_spec: Array<InputPathType> | null = null,
    matrix: InputPathType | null = null,
    workdir: string | null = null,
    no_cmd_out: boolean = false,
    no_clean: boolean = false,
): FatProcMapToDtiParameters {
    /**
     * Build parameters.
    
     * @param source T1w volume file (source volume)
     * @param base DWI reference volume file
     * @param prefix Output prefix for files and snapshots
     * @param followers_nn Follower data sets with NN interpolation
     * @param followers_wsinc5 Follower data sets with wsinc5 interpolation
     * @param followers_surf Surface follower data sets
     * @param followers_ndset NIML follower data sets
     * @param followers_spec Spec follower data sets
     * @param matrix Pre-made matrix file for transformation
     * @param workdir Specify a working directory
     * @param no_cmd_out Don't save the command line call of this program
     * @param no_clean Do not delete temporary working directory
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fat_proc_map_to_dti" as const,
        "source": source,
        "base": base,
        "prefix": prefix,
        "no_cmd_out": no_cmd_out,
        "no_clean": no_clean,
    };
    if (followers_nn !== null) {
        params["followers_nn"] = followers_nn;
    }
    if (followers_wsinc5 !== null) {
        params["followers_wsinc5"] = followers_wsinc5;
    }
    if (followers_surf !== null) {
        params["followers_surf"] = followers_surf;
    }
    if (followers_ndset !== null) {
        params["followers_ndset"] = followers_ndset;
    }
    if (followers_spec !== null) {
        params["followers_spec"] = followers_spec;
    }
    if (matrix !== null) {
        params["matrix"] = matrix;
    }
    if (workdir !== null) {
        params["workdir"] = workdir;
    }
    return params;
}


function fat_proc_map_to_dti_cargs(
    params: FatProcMapToDtiParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fat_proc_map_to_dti");
    cargs.push(
        "-source",
        execution.inputFile((params["source"] ?? null))
    );
    cargs.push(
        "-base",
        execution.inputFile((params["base"] ?? null))
    );
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["followers_nn"] ?? null) !== null) {
        cargs.push(
            "-followers_NN",
            ...(params["followers_nn"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["followers_wsinc5"] ?? null) !== null) {
        cargs.push(
            "-followers_wsinc5",
            ...(params["followers_wsinc5"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["followers_surf"] ?? null) !== null) {
        cargs.push(
            "-followers_surf",
            ...(params["followers_surf"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["followers_ndset"] ?? null) !== null) {
        cargs.push(
            "-followers_ndset",
            ...(params["followers_ndset"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["followers_spec"] ?? null) !== null) {
        cargs.push(
            "-followers_spec",
            ...(params["followers_spec"] ?? null).map(f => execution.inputFile(f))
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


function fat_proc_map_to_dti_outputs(
    params: FatProcMapToDtiParameters,
    execution: Execution,
): FatProcMapToDtiOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FatProcMapToDtiOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fat_proc_map_to_dti_execute(
    params: FatProcMapToDtiParameters,
    execution: Execution,
): FatProcMapToDtiOutputs {
    /**
     * A program for mapping data sets into DWI space, suitable for aligning anatomical ROI maps or EPI data to a DWI reference volume.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FatProcMapToDtiOutputs`).
     */
    params = execution.params(params)
    const cargs = fat_proc_map_to_dti_cargs(params, execution)
    const ret = fat_proc_map_to_dti_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fat_proc_map_to_dti(
    source: InputPathType,
    base: InputPathType,
    prefix: string,
    followers_nn: Array<InputPathType> | null = null,
    followers_wsinc5: Array<InputPathType> | null = null,
    followers_surf: Array<InputPathType> | null = null,
    followers_ndset: Array<InputPathType> | null = null,
    followers_spec: Array<InputPathType> | null = null,
    matrix: InputPathType | null = null,
    workdir: string | null = null,
    no_cmd_out: boolean = false,
    no_clean: boolean = false,
    runner: Runner | null = null,
): FatProcMapToDtiOutputs {
    /**
     * A program for mapping data sets into DWI space, suitable for aligning anatomical ROI maps or EPI data to a DWI reference volume.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param source T1w volume file (source volume)
     * @param base DWI reference volume file
     * @param prefix Output prefix for files and snapshots
     * @param followers_nn Follower data sets with NN interpolation
     * @param followers_wsinc5 Follower data sets with wsinc5 interpolation
     * @param followers_surf Surface follower data sets
     * @param followers_ndset NIML follower data sets
     * @param followers_spec Spec follower data sets
     * @param matrix Pre-made matrix file for transformation
     * @param workdir Specify a working directory
     * @param no_cmd_out Don't save the command line call of this program
     * @param no_clean Do not delete temporary working directory
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FatProcMapToDtiOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FAT_PROC_MAP_TO_DTI_METADATA);
    const params = fat_proc_map_to_dti_params(source, base, prefix, followers_nn, followers_wsinc5, followers_surf, followers_ndset, followers_spec, matrix, workdir, no_cmd_out, no_clean)
    return fat_proc_map_to_dti_execute(params, execution);
}


export {
      FAT_PROC_MAP_TO_DTI_METADATA,
      FatProcMapToDtiOutputs,
      FatProcMapToDtiParameters,
      fat_proc_map_to_dti,
      fat_proc_map_to_dti_params,
};
