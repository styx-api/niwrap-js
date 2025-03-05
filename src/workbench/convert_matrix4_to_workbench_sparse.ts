// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CONVERT_MATRIX4_TO_WORKBENCH_SPARSE_METADATA: Metadata = {
    id: "e28b7723dc233ae33bddb7baaceb4212b4fd873b.boutiques",
    name: "convert-matrix4-to-workbench-sparse",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface ConvertMatrix4ToWorkbenchSparseVolumeSeedsParameters {
    "__STYXTYPE__": "volume_seeds";
    "cifti_template": InputPathType;
    "direction": string;
}


interface ConvertMatrix4ToWorkbenchSparseParameters {
    "__STYXTYPE__": "convert-matrix4-to-workbench-sparse";
    "matrix4_1": string;
    "matrix4_2": string;
    "matrix4_3": string;
    "orientation_file": InputPathType;
    "voxel_list": string;
    "wb_sparse_out": string;
    "opt_surface_seeds_seed_roi"?: InputPathType | null | undefined;
    "volume_seeds"?: ConvertMatrix4ToWorkbenchSparseVolumeSeedsParameters | null | undefined;
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
        "convert-matrix4-to-workbench-sparse": convert_matrix4_to_workbench_sparse_cargs,
        "volume_seeds": convert_matrix4_to_workbench_sparse_volume_seeds_cargs,
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


function convert_matrix4_to_workbench_sparse_volume_seeds_params(
    cifti_template: InputPathType,
    direction: string,
): ConvertMatrix4ToWorkbenchSparseVolumeSeedsParameters {
    /**
     * Build parameters.
    
     * @param cifti_template cifti file to use the volume mappings from
     * @param direction dimension along the cifti file to take the mapping from, ROW or COLUMN
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume_seeds" as const,
        "cifti_template": cifti_template,
        "direction": direction,
    };
    return params;
}


function convert_matrix4_to_workbench_sparse_volume_seeds_cargs(
    params: ConvertMatrix4ToWorkbenchSparseVolumeSeedsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-volume-seeds");
    cargs.push(execution.inputFile((params["cifti_template"] ?? null)));
    cargs.push((params["direction"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `convert_matrix4_to_workbench_sparse(...)`.
 *
 * @interface
 */
interface ConvertMatrix4ToWorkbenchSparseOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function convert_matrix4_to_workbench_sparse_params(
    matrix4_1: string,
    matrix4_2: string,
    matrix4_3: string,
    orientation_file: InputPathType,
    voxel_list: string,
    wb_sparse_out: string,
    opt_surface_seeds_seed_roi: InputPathType | null = null,
    volume_seeds: ConvertMatrix4ToWorkbenchSparseVolumeSeedsParameters | null = null,
): ConvertMatrix4ToWorkbenchSparseParameters {
    /**
     * Build parameters.
    
     * @param matrix4_1 the first matrix4 file
     * @param matrix4_2 the second matrix4 file
     * @param matrix4_3 the third matrix4 file
     * @param orientation_file the .fiberTEMP.nii file this trajectory file applies to
     * @param voxel_list list of white matter voxel index triplets as used in the trajectory matrix
     * @param wb_sparse_out output - the output workbench sparse file
     * @param opt_surface_seeds_seed_roi specify the surface seed space: metric roi file of all vertices used in the seed space
     * @param volume_seeds specify the volume seed space
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "convert-matrix4-to-workbench-sparse" as const,
        "matrix4_1": matrix4_1,
        "matrix4_2": matrix4_2,
        "matrix4_3": matrix4_3,
        "orientation_file": orientation_file,
        "voxel_list": voxel_list,
        "wb_sparse_out": wb_sparse_out,
    };
    if (opt_surface_seeds_seed_roi !== null) {
        params["opt_surface_seeds_seed_roi"] = opt_surface_seeds_seed_roi;
    }
    if (volume_seeds !== null) {
        params["volume_seeds"] = volume_seeds;
    }
    return params;
}


function convert_matrix4_to_workbench_sparse_cargs(
    params: ConvertMatrix4ToWorkbenchSparseParameters,
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
    cargs.push("-convert-matrix4-to-workbench-sparse");
    cargs.push((params["matrix4_1"] ?? null));
    cargs.push((params["matrix4_2"] ?? null));
    cargs.push((params["matrix4_3"] ?? null));
    cargs.push(execution.inputFile((params["orientation_file"] ?? null)));
    cargs.push((params["voxel_list"] ?? null));
    cargs.push((params["wb_sparse_out"] ?? null));
    if ((params["opt_surface_seeds_seed_roi"] ?? null) !== null) {
        cargs.push(
            "-surface-seeds",
            execution.inputFile((params["opt_surface_seeds_seed_roi"] ?? null))
        );
    }
    if ((params["volume_seeds"] ?? null) !== null) {
        cargs.push(...dynCargs((params["volume_seeds"] ?? null).__STYXTYPE__)((params["volume_seeds"] ?? null), execution));
    }
    return cargs;
}


function convert_matrix4_to_workbench_sparse_outputs(
    params: ConvertMatrix4ToWorkbenchSparseParameters,
    execution: Execution,
): ConvertMatrix4ToWorkbenchSparseOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ConvertMatrix4ToWorkbenchSparseOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function convert_matrix4_to_workbench_sparse_execute(
    params: ConvertMatrix4ToWorkbenchSparseParameters,
    execution: Execution,
): ConvertMatrix4ToWorkbenchSparseOutputs {
    /**
     * Convert a 3-file matrix4 to a workbench sparse file.
     * 
     * Converts the matrix 4 output of probtrackx to workbench sparse file format.  Exactly one of -surface-seeds and -volume-seeds must be specified.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ConvertMatrix4ToWorkbenchSparseOutputs`).
     */
    params = execution.params(params)
    const cargs = convert_matrix4_to_workbench_sparse_cargs(params, execution)
    const ret = convert_matrix4_to_workbench_sparse_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function convert_matrix4_to_workbench_sparse(
    matrix4_1: string,
    matrix4_2: string,
    matrix4_3: string,
    orientation_file: InputPathType,
    voxel_list: string,
    wb_sparse_out: string,
    opt_surface_seeds_seed_roi: InputPathType | null = null,
    volume_seeds: ConvertMatrix4ToWorkbenchSparseVolumeSeedsParameters | null = null,
    runner: Runner | null = null,
): ConvertMatrix4ToWorkbenchSparseOutputs {
    /**
     * Convert a 3-file matrix4 to a workbench sparse file.
     * 
     * Converts the matrix 4 output of probtrackx to workbench sparse file format.  Exactly one of -surface-seeds and -volume-seeds must be specified.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param matrix4_1 the first matrix4 file
     * @param matrix4_2 the second matrix4 file
     * @param matrix4_3 the third matrix4 file
     * @param orientation_file the .fiberTEMP.nii file this trajectory file applies to
     * @param voxel_list list of white matter voxel index triplets as used in the trajectory matrix
     * @param wb_sparse_out output - the output workbench sparse file
     * @param opt_surface_seeds_seed_roi specify the surface seed space: metric roi file of all vertices used in the seed space
     * @param volume_seeds specify the volume seed space
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ConvertMatrix4ToWorkbenchSparseOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CONVERT_MATRIX4_TO_WORKBENCH_SPARSE_METADATA);
    const params = convert_matrix4_to_workbench_sparse_params(matrix4_1, matrix4_2, matrix4_3, orientation_file, voxel_list, wb_sparse_out, opt_surface_seeds_seed_roi, volume_seeds)
    return convert_matrix4_to_workbench_sparse_execute(params, execution);
}


export {
      CONVERT_MATRIX4_TO_WORKBENCH_SPARSE_METADATA,
      ConvertMatrix4ToWorkbenchSparseOutputs,
      ConvertMatrix4ToWorkbenchSparseParameters,
      ConvertMatrix4ToWorkbenchSparseVolumeSeedsParameters,
      convert_matrix4_to_workbench_sparse,
      convert_matrix4_to_workbench_sparse_params,
      convert_matrix4_to_workbench_sparse_volume_seeds_params,
};
