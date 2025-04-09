// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_EXPORT_DENSE_MAPPING_METADATA: Metadata = {
    id: "b5ed5abf50f875fb0a865390c83967be3e6530bd.boutiques",
    name: "cifti-export-dense-mapping",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiExportDenseMappingVolumeAllParameters {
    "__STYXTYPE__": "volume_all";
    "text_out": string;
    "opt_no_cifti_index": boolean;
    "opt_structure": boolean;
}


interface CiftiExportDenseMappingSurfaceParameters {
    "__STYXTYPE__": "surface";
    "structure": string;
    "text_out": string;
    "opt_no_cifti_index": boolean;
}


interface CiftiExportDenseMappingVolumeParameters {
    "__STYXTYPE__": "volume";
    "structure": string;
    "text_out": string;
    "opt_no_cifti_index": boolean;
}


interface CiftiExportDenseMappingParameters {
    "__STYXTYPE__": "cifti-export-dense-mapping";
    "cifti": InputPathType;
    "direction": string;
    "volume_all"?: CiftiExportDenseMappingVolumeAllParameters | null | undefined;
    "surface"?: Array<CiftiExportDenseMappingSurfaceParameters> | null | undefined;
    "volume"?: Array<CiftiExportDenseMappingVolumeParameters> | null | undefined;
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
        "cifti-export-dense-mapping": cifti_export_dense_mapping_cargs,
        "volume_all": cifti_export_dense_mapping_volume_all_cargs,
        "surface": cifti_export_dense_mapping_surface_cargs,
        "volume": cifti_export_dense_mapping_volume_cargs,
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


function cifti_export_dense_mapping_volume_all_params(
    text_out: string,
    opt_no_cifti_index: boolean = false,
    opt_structure: boolean = false,
): CiftiExportDenseMappingVolumeAllParameters {
    /**
     * Build parameters.
    
     * @param text_out output - the output text file
     * @param opt_no_cifti_index don't write the cifti index in the output file
     * @param opt_structure write the structure each voxel belongs to in the output file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume_all" as const,
        "text_out": text_out,
        "opt_no_cifti_index": opt_no_cifti_index,
        "opt_structure": opt_structure,
    };
    return params;
}


function cifti_export_dense_mapping_volume_all_cargs(
    params: CiftiExportDenseMappingVolumeAllParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-volume-all");
    cargs.push((params["text_out"] ?? null));
    if ((params["opt_no_cifti_index"] ?? null)) {
        cargs.push("-no-cifti-index");
    }
    if ((params["opt_structure"] ?? null)) {
        cargs.push("-structure");
    }
    return cargs;
}


function cifti_export_dense_mapping_surface_params(
    structure: string,
    text_out: string,
    opt_no_cifti_index: boolean = false,
): CiftiExportDenseMappingSurfaceParameters {
    /**
     * Build parameters.
    
     * @param structure the structure to output
     * @param text_out output - the output text file
     * @param opt_no_cifti_index don't write the cifti index in the output file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "surface" as const,
        "structure": structure,
        "text_out": text_out,
        "opt_no_cifti_index": opt_no_cifti_index,
    };
    return params;
}


function cifti_export_dense_mapping_surface_cargs(
    params: CiftiExportDenseMappingSurfaceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-surface");
    cargs.push((params["structure"] ?? null));
    cargs.push((params["text_out"] ?? null));
    if ((params["opt_no_cifti_index"] ?? null)) {
        cargs.push("-no-cifti-index");
    }
    return cargs;
}


function cifti_export_dense_mapping_volume_params(
    structure: string,
    text_out: string,
    opt_no_cifti_index: boolean = false,
): CiftiExportDenseMappingVolumeParameters {
    /**
     * Build parameters.
    
     * @param structure the structure to output
     * @param text_out output - the output text file
     * @param opt_no_cifti_index don't write the cifti index in the output file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume" as const,
        "structure": structure,
        "text_out": text_out,
        "opt_no_cifti_index": opt_no_cifti_index,
    };
    return params;
}


function cifti_export_dense_mapping_volume_cargs(
    params: CiftiExportDenseMappingVolumeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-volume");
    cargs.push((params["structure"] ?? null));
    cargs.push((params["text_out"] ?? null));
    if ((params["opt_no_cifti_index"] ?? null)) {
        cargs.push("-no-cifti-index");
    }
    return cargs;
}


/**
 * Output object returned when calling `cifti_export_dense_mapping(...)`.
 *
 * @interface
 */
interface CiftiExportDenseMappingOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function cifti_export_dense_mapping_params(
    cifti: InputPathType,
    direction: string,
    volume_all: CiftiExportDenseMappingVolumeAllParameters | null = null,
    surface: Array<CiftiExportDenseMappingSurfaceParameters> | null = null,
    volume: Array<CiftiExportDenseMappingVolumeParameters> | null = null,
): CiftiExportDenseMappingParameters {
    /**
     * Build parameters.
    
     * @param cifti the cifti file
     * @param direction which direction to export the mapping from, ROW or COLUMN
     * @param volume_all export the the mapping of all voxels
     * @param surface export the the mapping of one surface structure
     * @param volume export the the mapping of one volume structure
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-export-dense-mapping" as const,
        "cifti": cifti,
        "direction": direction,
    };
    if (volume_all !== null) {
        params["volume_all"] = volume_all;
    }
    if (surface !== null) {
        params["surface"] = surface;
    }
    if (volume !== null) {
        params["volume"] = volume;
    }
    return params;
}


function cifti_export_dense_mapping_cargs(
    params: CiftiExportDenseMappingParameters,
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
    cargs.push("-cifti-export-dense-mapping");
    cargs.push(execution.inputFile((params["cifti"] ?? null)));
    cargs.push((params["direction"] ?? null));
    if ((params["volume_all"] ?? null) !== null) {
        cargs.push(...dynCargs((params["volume_all"] ?? null).__STYXTYPE__)((params["volume_all"] ?? null), execution));
    }
    if ((params["surface"] ?? null) !== null) {
        cargs.push(...(params["surface"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["volume"] ?? null) !== null) {
        cargs.push(...(params["volume"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function cifti_export_dense_mapping_outputs(
    params: CiftiExportDenseMappingParameters,
    execution: Execution,
): CiftiExportDenseMappingOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiExportDenseMappingOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function cifti_export_dense_mapping_execute(
    params: CiftiExportDenseMappingParameters,
    execution: Execution,
): CiftiExportDenseMappingOutputs {
    /**
     * Write index to element mapping as text.
     * 
     * This command produces text files that describe the mapping from cifti indices to surface vertices or voxels.  All indices are zero-based.  The default format for -surface is lines of the form:
     * 
     * <cifti-index> <vertex>
     * 
     * The default format for -volume and -volume-all is lines of the form:
     * 
     * <cifti-index> <i> <j> <k>
     * 
     * For each <structure> argument, use one of the following strings:
     * 
     * CORTEX_LEFT
     * CORTEX_RIGHT
     * CEREBELLUM
     * ACCUMBENS_LEFT
     * ACCUMBENS_RIGHT
     * ALL_GREY_MATTER
     * ALL_WHITE_MATTER
     * AMYGDALA_LEFT
     * AMYGDALA_RIGHT
     * BRAIN_STEM
     * CAUDATE_LEFT
     * CAUDATE_RIGHT
     * CEREBELLAR_WHITE_MATTER_LEFT
     * CEREBELLAR_WHITE_MATTER_RIGHT
     * CEREBELLUM_LEFT
     * CEREBELLUM_RIGHT
     * CEREBRAL_WHITE_MATTER_LEFT
     * CEREBRAL_WHITE_MATTER_RIGHT
     * CORTEX
     * DIENCEPHALON_VENTRAL_LEFT
     * DIENCEPHALON_VENTRAL_RIGHT
     * HIPPOCAMPUS_LEFT
     * HIPPOCAMPUS_RIGHT
     * INVALID
     * OTHER
     * OTHER_GREY_MATTER
     * OTHER_WHITE_MATTER
     * PALLIDUM_LEFT
     * PALLIDUM_RIGHT
     * PUTAMEN_LEFT
     * PUTAMEN_RIGHT
     * THALAMUS_LEFT
     * THALAMUS_RIGHT.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiExportDenseMappingOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_export_dense_mapping_cargs(params, execution)
    const ret = cifti_export_dense_mapping_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_export_dense_mapping(
    cifti: InputPathType,
    direction: string,
    volume_all: CiftiExportDenseMappingVolumeAllParameters | null = null,
    surface: Array<CiftiExportDenseMappingSurfaceParameters> | null = null,
    volume: Array<CiftiExportDenseMappingVolumeParameters> | null = null,
    runner: Runner | null = null,
): CiftiExportDenseMappingOutputs {
    /**
     * Write index to element mapping as text.
     * 
     * This command produces text files that describe the mapping from cifti indices to surface vertices or voxels.  All indices are zero-based.  The default format for -surface is lines of the form:
     * 
     * <cifti-index> <vertex>
     * 
     * The default format for -volume and -volume-all is lines of the form:
     * 
     * <cifti-index> <i> <j> <k>
     * 
     * For each <structure> argument, use one of the following strings:
     * 
     * CORTEX_LEFT
     * CORTEX_RIGHT
     * CEREBELLUM
     * ACCUMBENS_LEFT
     * ACCUMBENS_RIGHT
     * ALL_GREY_MATTER
     * ALL_WHITE_MATTER
     * AMYGDALA_LEFT
     * AMYGDALA_RIGHT
     * BRAIN_STEM
     * CAUDATE_LEFT
     * CAUDATE_RIGHT
     * CEREBELLAR_WHITE_MATTER_LEFT
     * CEREBELLAR_WHITE_MATTER_RIGHT
     * CEREBELLUM_LEFT
     * CEREBELLUM_RIGHT
     * CEREBRAL_WHITE_MATTER_LEFT
     * CEREBRAL_WHITE_MATTER_RIGHT
     * CORTEX
     * DIENCEPHALON_VENTRAL_LEFT
     * DIENCEPHALON_VENTRAL_RIGHT
     * HIPPOCAMPUS_LEFT
     * HIPPOCAMPUS_RIGHT
     * INVALID
     * OTHER
     * OTHER_GREY_MATTER
     * OTHER_WHITE_MATTER
     * PALLIDUM_LEFT
     * PALLIDUM_RIGHT
     * PUTAMEN_LEFT
     * PUTAMEN_RIGHT
     * THALAMUS_LEFT
     * THALAMUS_RIGHT.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param cifti the cifti file
     * @param direction which direction to export the mapping from, ROW or COLUMN
     * @param volume_all export the the mapping of all voxels
     * @param surface export the the mapping of one surface structure
     * @param volume export the the mapping of one volume structure
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiExportDenseMappingOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_EXPORT_DENSE_MAPPING_METADATA);
    const params = cifti_export_dense_mapping_params(cifti, direction, volume_all, surface, volume)
    return cifti_export_dense_mapping_execute(params, execution);
}


export {
      CIFTI_EXPORT_DENSE_MAPPING_METADATA,
      CiftiExportDenseMappingOutputs,
      CiftiExportDenseMappingParameters,
      CiftiExportDenseMappingSurfaceParameters,
      CiftiExportDenseMappingVolumeAllParameters,
      CiftiExportDenseMappingVolumeParameters,
      cifti_export_dense_mapping,
      cifti_export_dense_mapping_params,
      cifti_export_dense_mapping_surface_params,
      cifti_export_dense_mapping_volume_all_params,
      cifti_export_dense_mapping_volume_params,
};
